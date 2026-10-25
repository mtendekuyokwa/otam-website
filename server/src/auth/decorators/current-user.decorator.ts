import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { JwtPayload } from '../auth.types.js';

/** Injects the decoded JWT (id, email, roles) from the authenticated request. */
export function CurrentUser(): ParameterDecorator {
  return createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest().user as JwtPayload;
  })();
}
