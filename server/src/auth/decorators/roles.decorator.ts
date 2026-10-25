import { SetMetadata } from '@nestjs/common';
import type { Role } from '../auth.types.js';

export const ROLES_KEY = 'roles';

/**
 * Declarative role check (evaluated by RolesGuard).
 * Example: @Roles('treasurer', 'super-admin') to require BOTH/specific roles.
 */
export function Roles(...roles: Role[]) {
  return SetMetadata(ROLES_KEY, roles);
}
