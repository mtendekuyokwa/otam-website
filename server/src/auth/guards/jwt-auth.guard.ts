import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/** Throws 401 when no valid JWT cookie/bearer token is present. */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
