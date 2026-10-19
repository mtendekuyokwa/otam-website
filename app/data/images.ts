/**
 * Pexels image helper + the photo pool used across the site.
 * Every image below was verified live (HTTP 200) via images.pexels.com.
 */

type Size = { w: number; h?: number };

/** Build a Pexels CDN URL with compression + optional fixed crop. */
export function pexels(id: number, { w, h }: Size): string {
  const base = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;
  const params = h
    ? `auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`
    : `auto=compress&cs=tinysrgb&w=${w}`;
  return `${base}?${params}`;
}

/**
 * Photographic seed used by hero, sections and cards.
 * Sorted top-of-search first: occupational therapy, clinicians, care work.
 */
export const photos = {
  heroChildClinic: 30313887, // medical check-up of a child in clinic
  heroDoctor: 18252404, // smiling woman in doctor uniform
  therapyHands: 12946478, // hands guiding a craft activity
  elderlyCare: 16364307, // woman taking care of old people
  scrabbleTherapy: 19835654, // the word "therapy" in scrabble letters
  physioTable: 11349880, // physiotherapy session
  childSession: 10565576, // child therapy session
  teamMeeting: 12903168, // team meeting around a table
  communityRwanda: 29521026, // community gathering
  lagosCollab: 30677596, // professional collaboration
  doctorStethoscope: 19131211, // smiling doctor with stethoscope
  nurseAttentive: 12491630, // care worker
  wheelchairSupport: 1358534, // elderly care hands
  mentalHealth: 14494148, // calm supportive interaction
} as const;
