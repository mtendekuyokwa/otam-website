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
  hero: px(30678208, 2000), // clinician working with a patient in clinic
  otHands: px(30483024, 1400), // hands manipulating therapy putty
  rehab: px(30688589, 1400), // clinician supporting a patient's arm
  childCare: px(34185202, 1400), // caring for a child
  classroom: px(25457343, 1400), // children at school desks
  lectureHall: px(27769510, 1600), // conference / CPD audience
  students: px(28593051, 1400), // smiling students in uniform
  village: px(25228112, 1600), // village street scene
  community: px(16241834, 1400), // people smiling together
  outreach: px(18057138, 1400), // community seated outdoors

  /* ————— Team placeholder portraits ————— */
  pSally: px(18828741), // Sally Palmer — President
  pHlupekire: px(29852895), // Hlupekire Jenda — Vice President
  pJohn: px(33048698), // John Khonje — Secretary
  pCanaan: px(11189139), // Canaan Zimba — Vice Secretary
  pChiwemi: px(19578019), // Chiwemi Manduwa — Treasurer
  pTessie: px(18252404), // Tessie Kalobekamo — Committee Member
  pOsman: px(28426641), // Osman Mdala — Committee Member
} as const;
