import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service.js';
import { DEFAULT_ROLE, normalizePhone, type PublicUser, type Role } from '../auth/auth.types.js';

/** Projection that never exposes passwordHash. */
const publicFields = {
  id: true,
  email: true,
  phone: true,
  fullName: true,
  roles: true,
} as const;

type PublicRow = {
  id: number;
  email: string;
  phone: string;
  fullName: string | null;
  roles: string;
};

function toPublic(row: PublicRow): PublicUser {
  return { ...row, roles: JSON.parse(row.roles) as string[] };
}

/** Conflict helper mirroring the [[00 - Unified account]] contract. */
function accountExists(field: 'email' | 'phone'): ConflictException {
  return new ConflictException({
    code: 'account-exists-login',
    message:
      field === 'email'
        ? 'An account with that email already exists — please log in.'
        : 'An account with that phone number already exists — please log in.',
  });
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly prisma: PrismaService) {}

  public async register(input: {
    email: string;
    phone: string;
    password: string;
    fullName?: string;
    roles?: Role[];
  }): Promise<PublicUser> {
    const email = input.email.toLowerCase();
    const roles: Role[] = input.roles?.length ? input.roles : [DEFAULT_ROLE];

    const emailTaken = await this.prisma.user.findUnique({ where: { email }, select: { id: true } });
    if (emailTaken) throw accountExists('email');
    const phoneTaken = await this.prisma.user.findUnique({
      where: { phone: normalizePhone(input.phone) },
      select: { id: true },
    });
    if (phoneTaken) throw accountExists('phone');

    try {
      const row = await this.prisma.user.create({
        select: publicFields,
        data: {
          email,
          phone: normalizePhone(input.phone),
          passwordHash: await bcrypt.hash(input.password, 10),
          fullName: input.fullName,
          roles: JSON.stringify(roles),
        },
      });
      this.logger.log(`registered user #${row.id} (${email})`);
      return toPublic(row);
    } catch (err: unknown) {
      // Race with a concurrent register — same code, then.
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        throw accountExists('email');
      }
      throw err;
    }
  }

  public toJwtPayload(user: PublicUser): { sub: number; email: string; roles: string[] } {
    return { sub: user.id, email: user.email, roles: user.roles };
  }

  public async findByEmail(email: string): Promise<{ id: number; email: string; passwordHash: string } | null> {
    return this.prisma.user.findFirst({
      where: { email: email.toLowerCase() },
      select: { id: true, email: true, passwordHash: true },
    });
  }

  public async getByIdOrFail(id: number): Promise<PublicUser> {
    const row = await this.prisma.user.findUnique({ where: { id }, select: publicFields });
    if (!row) throw new NotFoundException(`user #${id} not found`);
    return toPublic(row);
  }

  public async verifyPassword(user: { passwordHash: string }, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.passwordHash);
  }
}
