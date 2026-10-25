import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator.js';
import type { JwtPayload } from '../auth.types.js';

/**
 * Use with @Roles(...). Requests without the roles metadata pass through;
 * requests with it must carry every listed role (403 otherwise).
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!required || required.length === 0) return true;

    const { user } = context.switchToHttp().getRequest<{ user?: JwtPayload }>();
    const missing = required.filter((r) => !user?.roles?.includes(r));
    if (!user || missing.length > 0) {
      throw new ForbiddenException(
        missing.length > 0
          ? `missing role: ${required.join(', ')}`
          : 'unauthenticated',
      );
    }
    return true;
  }
}
