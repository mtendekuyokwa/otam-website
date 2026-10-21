/**
 * Asset map for the OTAM website.
 * Photography is hotlinked from Pexels (free to use, pexels.com/license).
 * Team portraits are stock placeholders — swap for real photos when available.
 * Partner logos for the home-page affiliates strip live in public/logos/
 * (WFOT, MAP/Kachere, Sandi, Motivation, UWC).
 */

const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const A = {
  /* ————— Identity ————— */
  logo: "/otam-logo.jpg", // official OTAM mark (from the association)

  /* ————— Imagery ————— */
  hero: px(30677591, 2000), // African clinician consulting a patient in clinic
  otHands: px(32405949, 1400), // African woman beading — fine-motor craft activity
  rehab: px(35142161, 1400), // amputee footballers on crutches — rehab through sport
  childCare: px(30110240, 1400), // mother and baby in kitenge — pediatric care
  classroom: px(25457343, 1400), // children at school desks
  lectureHall: px(30803493, 1600), // conference stage / CPD event
  students: px(28593051, 1400), // smiling students in uniform
  village: px(11770775, 1600), // assistive technology (homemade mobility device) in the community
  community: px(13917189, 1400), // people smiling together
  outreach: px(39726362, 1400), // child pushing a friend in a wheelchair — school programme

  /* ————— Team placeholder portraits ————— */
  pSally: px(18828741), // Sally Palmer — President
  pHlupekire: px(29852895), // Hlupekire Jenda — Vice President
  pJohn: px(33048698), // John Khonje — Secretary
  pCanaan: px(11189139), // Canaan Zimba — Vice Secretary
  pChiwemi: px(19578019), // Chiwemi Manduwa — Treasurer
  pTessie: px(33674901), // Tessie Kalobekamo — Committee Member
  pOsman: px(28426641), // Osman Mdala — Committee Member
} as const;

/**
 * Hero slideshow — the home-page backdrop slowly crossfades between these
 * scenes of Malawian practice (clinic, child care, outreach, community, hands).
 * Order matters: the first frame paints before any transition.
 */
export const HERO_ROTATION = [
  A.hero,
  A.childCare,
  A.village,
  A.outreach,
  A.otHands,
] as const;
