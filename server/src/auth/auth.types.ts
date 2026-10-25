/**
 * Roles per [[00 - Unified account]]:
 * Super-Admin, Events Officer, Treasurer, CPD Officer, Protocol/Membership,
 * Member, Attendee, Author/Presenter, Organizer.
 */
export const ROLES = [
  'super-admin',
  'events-officer',
  'treasurer',
  'cpd-officer',
  'protocol',
  'member',
  'attendee',
  'author',
  'organizer',
] as const;

export type Role = (typeof ROLES)[number];

/** Default role for a self-registered person. Members must be vetted (M2). */
export const DEFAULT_ROLE: Role = 'attendee';

/** Public (sanitized) user — never leaks password hash. */
export interface PublicUser {
  id: number;
  email: string;
  phone: string;
  fullName: string | null;
  roles: string[];
}

export interface JwtPayload {
  sub: number;
  email: string;
  roles: string[];
}

/** Internal record (matches the eventual `users` table in cPanel MySQL). */
export interface UserRecord extends PublicUser {
  passwordHash: string;
  createdAt: string;
}

/** Malawi numbers: 9 digits after 265, e.g. +265991234567. */
export function normalizePhone(raw: string): string {
  let digits = raw.replace(/[\s\-().]/g, '');
  if (digits.startsWith('+')) digits = digits.slice(1);
  if (digits.startsWith('0')) digits = '265' + digits.slice(1);
  return `+${digits}`;
}
