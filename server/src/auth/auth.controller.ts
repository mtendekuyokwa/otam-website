import { Body, ConflictException, Controller, Get, HttpCode, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { RegisterDto } from './dto/register.dto.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
import type { JwtPayload, PublicUser } from './auth.types.js';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /**
   * M0 Identity rule: if the email already exists, respond with the
   * `account-exists-login` code so the client is sent to /login instead of
   * creating a duplicate account (one person = one account everywhere).
   */
  @Post('register')
  public async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.auth.register(dto);
    this.auth.setSessionCookie(res, user);
    return { user, accessToken: this.auth.signToken(user) };
  }

  @HttpCode(200)
  @Post('login')
  public async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.auth.login(dto);
    this.auth.setSessionCookie(res, user);
    return this.auth.toSession(user);
  }

  @HttpCode(204)
  @Post('logout')
  public logout(@Res({ passthrough: true }) res: Response) {
    this.auth.clearSessionCookie(res);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  public async me(@CurrentUser() user: JwtPayload): Promise<PublicUser> {
    // Lookup stays live so suspended/removed accounts drop out fast.
    return this.auth.me(user.sub);
  }
}
