import type { Request } from 'express';

/** Name of the session cookie holding the JWT. */
export const SESSION_COOKIE = 'otam_session';

/** One week, in ms. */
export const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Prefers the session cookie; falls back to the `Authorization: Bearer` header
 * so the mobile app (M8) can use the exact same JWT without cookies.
 */
export function cookieOrBearerExtractor(req: Request, headerExtractor: (req: Request) => string | null): string | null {
  const fromCookie = req?.cookies?.[SESSION_COOKIE];
  if (typeof fromCookie === 'string' && fromCookie.length > 0) return fromCookie;
  return headerExtractor(req);
}
