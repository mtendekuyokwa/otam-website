import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service.js';
import { SESSION_COOKIE, SESSION_MAX_AGE_MS } from './cookies.js';
import type { LoginDto } from './dto/login.dto.js';
import type { RegisterDto } from './dto/register.dto.js';
import type { JwtPayload, PublicUser } from './auth.types.js';
import type { CookieOptions, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UsersService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  /** Creates the account; duplicate email/phone → `account-exists-login` (M0 rule). */
  public async register(dto: RegisterDto): Promise<PublicUser> {
    return this.users.register(dto);
  }

  public async login(dto: LoginDto): Promise<PublicUser> {
    const record = await this.users.findByEmail(dto.email);
    if (!record || !(await this.users.verifyPassword(record, dto.password))) {
      throw new UnauthorizedException('invalid credentials');
    }
    return this.users.getByIdOrFail(record.id);
  }

  public async me(userId: number): Promise<PublicUser> {
    try {
      return await this.users.getByIdOrFail(userId);
    } catch {
      throw new UnauthorizedException('account no longer exists');
    }
  }

  public signToken(user: PublicUser): string {
    return this.jwt.sign(this.users.toJwtPayload(user));
  }

  /**
   * Issues the session cookie. httpOnly + sameSite=lax (CSRF-resistant), and
   * `secure` flipped on via COOKIE_SECURE=1 once behind HTTPS.
   */
  public setSessionCookie(res: Response, user: PublicUser): void {
    res.cookie(SESSION_COOKIE, this.signToken(user), {
      httpOnly: true,
      sameSite: 'lax',
      secure: String(process.env.COOKIE_SECURE) === '1',
      maxAge: SESSION_MAX_AGE_MS,
      path: '/',
    } satisfies CookieOptions);
  }

  public clearSessionCookie(res: Response): void {
    res.clearCookie(SESSION_COOKIE, { httpOnly: true, sameSite: 'lax', path: '/' });
  }

  /** Session payload consumed by mobile (M8) — cookie-less clients use the bearer token. */
  public toSession(user: PublicUser): { user: PublicUser; accessToken: string; expiresIn: string | number } {
    const expiresIn = this.config.get<string>('JWT_EXPIRES_IN') ?? '7d';
    return { user, accessToken: this.signToken(user), expiresIn };
  }
}

export type { JwtPayload };
