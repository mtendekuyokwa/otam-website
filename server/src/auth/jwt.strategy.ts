import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { cookieOrBearerExtractor } from './cookies.js';
import type { JwtPayload } from './auth.types.js';
import type { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: (req: Request) =>
        cookieOrBearerExtractor(
          req,
          (r: Request) => ExtractJwt.fromAuthHeaderAsBearerToken()(r),
        ),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('JWT_SECRET'),
    });
  }

  /** Whatever is returned here becomes `req.user` (used by CurrentUser / RolesGuard). */
  validate(payload: JwtPayload): JwtPayload {
    return payload;
  }
}
