interface NavLinkItem {
  to: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export const site = {
  name: "OTAM",
  longName: "Occupational Therapy Association of Malawi",
  email: "OTAMalawi@gmail.com",
  tagline: "Helping occupational therapy take root in Malawi",
};

/** Board members — details carried over from the original OTAM site. */
export const board = [
  {
    name: "Dorothy Chinguo",
    role: "Director",
    email: "dorothychinguo@gmail.com",
    phone: "0888 514 639",
    initials: "DC",
    tint: "bg-brand-700",
  },
  {
    name: "Kate Loveday",
    role: "Secretary",
    email: "kate.loveday@gmail.com",
    phone: "0999 406 020",
    initials: "KL",
    tint: "bg-accent-500",
  },
];

/** Where occupational therapists in Malawi are working today. */
export const workplaces = [
  {
    name: "Kachere Rehabilitation Centre",
    city: "Blantyre",
    blurb:
      "National referral rehabilitation centre, where OTs deliver inpatient and community reintegration programmes.",
    photo: "physioTable" as const,
  },
  {
    name: "Sandi Rehabilitation, Assessment & Therapy Clinic",
    city: "Blantyre",
    blurb:
      "Private clinic offering assessment and therapy across paediatrics and adult rehabilitation.",
    photo: "childSession" as const,
  },
  {
    name: "Motivation Malawi",
    city: "Community based",
    blurb:
      "Wheelchair provision, peer support and community based rehabilitation for people with mobility needs.",
    photo: "wheelchairSupport" as const,
  },
];

export const focusAreas = [
  {
    n: "01",
    title: "Pediatrics",
    blurb:
      "Supporting children's development, play and participation at home, in school and in the clinic.",
  },
  {
    n: "02",
    title: "Mental Health",
    blurb:
      "Everyday-living rehabilitation for people living with mental illness, in hospital and in community.",
  },
  {
    n: "03",
    title: "Physical Rehabilitation",
    blurb:
      "Recovery after injury, stroke or amputation: rebuilding function, independence and confidence.",
  },
  {
    n: "04",
    title: "Schools & Community",
    blurb:
      "Inclusive education support and community programmes that keep people doing what matters to them.",
  },
];
