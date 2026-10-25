import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Auth (e2e)', () => {
  let app: INestApplication;
  let agent: ReturnType<typeof request.agent>;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    // Mirror main.ts so cookie + validation behaviour is tested for real.
    const cookieParser = (await import('cookie-parser')).default;
    const { ValidationPipe } = await import('@nestjs/common');
    app.use(cookieParser());
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );
    await app.init();
    // ONE agent for the whole suite => cookies persist across requests.
    agent = request.agent(app.getHttpServer());
    // SQLite rows persist between runs — start clean for the test account.
    const prisma = app.get(PrismaService);
    await prisma.user.deleteMany({ where: { email: { in: ['grace.mwale@example.com', 'gladys.banda@example.com'] } } });
  });

  afterAll(async () => {
    await app.close();
  });

  it('registers an account, returns the access token and sets the session cookie', async () => {
    const res = await agent
      .post('/auth/register')
      .send({
        email: 'Grace.Mwale@example.com',
        phone: '0991 234 567',
        password: 'baobab-2026',
        fullName: 'Grace Mwale',
      });
    expect(res.status).toBe(201);
    expect(res.body.user.roles).toContain('attendee');
    expect(res.body.user.email).toBe('grace.mwale@example.com');
    expect(res.body.user.phone).toBe('+265991234567');
    expect(res.headers['set-cookie'][0]).toContain('otam_session=');
    expect(res.body.accessToken).toBeTruthy();
  });

  it('rejects a duplicate email with account-exists-login', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'grace.mwale@example.com', phone: '0991 234 567', password: 'baobab-2026' });
    expect(res.status).toBe(409);
    expect(res.body.code).toBe('account-exists-login');
  });

  it('logs in with the cookie and reads /auth/me from it', async () => {
    const login = await agent
      .post('/auth/login')
      .send({ email: 'grace.mwale@example.com', password: 'baobab-2026' });
    expect(login.status).toBe(200);

    const me = await agent.get('/auth/me');
    expect(me.status).toBe(200);
    expect(me.body.id).toBe(login.body.user.id);
  });

  it('rejects a wrong password with 401 and bad input with 400', async () => {
    expect(
      (await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'grace.mwale@example.com', password: 'wrong-pass' })).status,
    ).toBe(401);

    expect(
      (await request(app.getHttpServer())
        .post('/auth/register')
        .send({ email: 'nope', phone: 'x', password: 'short' })).status,
    ).toBe(400);
  });

  it('rejects a duplicate phone with account-exists-login', async () => {
    const res = await agent
      .post('/auth/register')
      .send({ email: 'gladys.banda@example.com', phone: '0991 234 567', password: 'baobab-2026' });
    expect(res.status).toBe(409);
    expect(res.body.code).toBe('account-exists-login');
  });

  it('accepts the JWT as a bearer token for mobile (M8)', async () => {
    const login = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'grace.mwale@example.com', password: 'baobab-2026' });
    const token = login.body.accessToken;

    const me = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`);
    expect(me.status).toBe(200);
  });
});
