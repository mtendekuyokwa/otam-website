import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);

  // Sessions: the JWT travels in an httpOnly cookie (`otam_session`).
  app.use(cookieParser());

  // Validate + strip unknown fields on every request body.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // The TanStack web app (Vite dev server on 5173) calls this API with cookies.
  app.enableCors({
    origin: (config.get<string>('WEB_ORIGIN') ?? 'http://localhost:5173').split(',').map((o) => o.trim()),
    credentials: true,
  });

  // Trust the proxy so `secure: true` cookies keep working under cPanel/Apache/Plesk.
  app.set('trust proxy', 1);

  await app.listen(config.get<number>('PORT') ?? 3000);
}
await bootstrap();
