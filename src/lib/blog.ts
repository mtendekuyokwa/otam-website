/**
 * The OTAM journal — blog content.
 * Static posts for now; swap the array for a CMS feed when editorial tooling
 * arrives. The three homepage "What we're building" cards link to the first
 * three slugs.
 */
import { A } from "~/lib/assets";

export type PostSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bulleted list rendered under the paragraphs */
  list?: {
    lead?: string;
    rest: string;
  }[];
};

export type Post = {
  slug: string;
  tag: string;
  title: string;
  /** The standfirst shown on cards and at the top of the article */
  dek: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  /** Larger lede paragraphs, rendered before the first section heading */
  intro: string[];
  quote?: { text: string; cite: string };
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "national-conference-2026",
    tag: "Conference 2026",
    title: "OTAM's first national conference — a first for the profession",
    dek: "Tracks, workshops, abstracts and accommodation: what OTAM's first full scientific conference means for occupational therapists across Malawi and the region.",
    date: "22 September 2026",
    readTime: "6 min read",
    image: A.lectureHall,
    imageAlt: "A conference hall of practitioners listening to a presentation",
    featured: true,
    intro: [
      "For the first time, occupational therapists in Malawi will gather under one roof for a national scientific conference of their own. OTAM is bringing together occupational therapists, occupational therapy technicians, students and partners from across the country — and from beyond its borders — for three days of practice, evidence and ideas.",
      "A profession this size rarely has the chance to see itself whole. The conference is designed to change that: to put faces to names, to share what is working in wards, classrooms and village clinics, and to set a shared direction for the years ahead.",
    ],
    quote: {
      text:
        "A profession this small cannot afford to work in silos. When we gather, we multiply.",
      cite: "OTAM Executive Committee",
    },
    sections: [
      {
        heading: "Why a conference, why now",
        paragraphs: [
          "Occupational therapy in Malawi is growing — in numbers, in services and in ambition — but until now there has been no national platform where that growth could be compared, critiqued and celebrated. Practitioners in Blantyre often know little of what colleagues in the Northern Region are solving, and independent therapists can go years without professional contact.",
          "A scientific conference is the classic answer to that isolation, and OTAM's constitution names it plainly: to encourage scientific research, to champion continuing professional development, and to connect therapists across every sector. The 2026 conference is all three, delivered at once.",
        ],
      },
      {
        heading: "What the programme looks like",
        paragraphs: [
          "The programme runs over three days and is built around parallel tracks, so that a paediatric therapist, a community-based rehabilitation coordinator and a student all find a full timetable. Each track blends invited speakers, submitted abstracts and hands-on workshops.",
        ],
        list: [
          { lead: "Clinical practice:", rest: "rehabilitation advances, assistive technology and case-based learning from Kachere, Sandi and district services." },
          { lead: "Education & research:", rest: "workforce development, supervision of technicians, and first findings from Malawian-led studies." },
          { lead: "Community & inclusion:", rest: "school-based therapy, disability advocacy and livelihoods work with partners nationwide." },
        ],
      },
      {
        heading: "Who should be in the room",
        paragraphs: [
          "Qualified occupational therapists and OT technicians practising in Malawi form the core of the conference, but the invitation is deliberately wide. Students are encouraged to attend and to submit — poster presentations by students have their own session. Associate members, allied professionals, NGO partners and institutional members are welcome, with a dedicated rate.",
          "Abstract submission, registration and accommodation details are distributed through the association and member networks. If you are not yet a member, this is a very practical reason to become one.",
        ],
      },
      {
        heading: "Be part of the first",
        paragraphs: [
          "First conferences become footnotes in a profession's history — the moment the community took shape. OTAM wants the 2026 conference to be remembered for the quality of its science and the warmth of its welcome alike. Submit an abstract, share the call with a colleague, or write to the association about sponsorship and partnership opportunities.",
        ],
      },
    ],
  },
  {
    slug: "ot-education-in-malawi",
    tag: "Education",
    title: "Working towards an occupational therapy course, trained in Malawi",
    dek: "Today most Malawian occupational therapists train abroad. Here is what it would take to build the profession from home — and the steps OTAM is taking to get there.",
    date: "12 August 2026",
    readTime: "5 min read",
    image: A.students,
    imageAlt: "Students in training together",
    intro: [
      "Every occupational therapist who currently practises in Malawi trained somewhere else. Sponsorships and regional partnerships have produced excellent clinicians — but each departing student represents a cost the country pays twice: once in fees, and again in the risk that a trained therapist settles abroad.",
      "OTAM's five-year plan puts occupational therapy education at its centre. The ambition is simple to state and demanding to achieve: a recognised OT pipeline trained here, in Malawi, for Malawi.",
    ],
    quote: {
      text:
        "The future of Malawian occupational therapy should be built in Malawian classrooms.",
      cite: "OTAM Education portfolio",
    },
    sections: [
      {
        heading: "The gap in the pipeline",
        paragraphs: [
          "Malawi has a strong tradition of occupational therapy technicians — a mid-level cadre that carries a remarkable share of the country's rehabilitation work. But the full professional cadre remains thin, and the technicians who want to deepen their practice have historically had no local route to do so.",
          "The result is a profession that numbers in the dozens serving a country of millions. District hospitals go without; schools go without; families travel long distances for services that exist in only a few centres.",
        ],
      },
      {
        heading: "What it takes to build a course",
        paragraphs: [
          "A WFOT-approved occupational therapy programme needs several things at once: a university partner willing to host it, clinical education placements that can sustain a cohort, a faculty — local and visiting — able to teach it, and WFOT minimum standards met from day one.",
          "None of these can be conjured alone. OTAM's role is convenor and standard-bearer: keeping dialogue open with government, universities and international partners, and making sure that whatever curriculum emerges is built on the realities of Malawian practice — rural outreach, multilingual communities and family-centred care included.",
        ],
        list: [
          { lead: "Partnerships:", rest: "deepening ties with regional universities and the WFOT to align standards from the start." },
          { lead: "Clinical placements:", rest: "growing the supervised placement capacity at existing centres so it can carry students." },
          { lead: "Faculty pipeline:", rest: "supporting qualified OTs towards teaching and research roles, including postgraduate study." },
        ],
      },
      {
        heading: "CPD while we build",
        paragraphs: [
          "A full degree course is a years-long project. In the meantime, continuing professional development is how the profession keeps its edge: the workshops, mentorship circles and journal clubs OTAM runs exist precisely so that practice does not stand still while the long-term plan takes shape.",
          "If you are an OT technician with ambitions, a therapist with teaching experience, or a partner interested in investing in the workforce, the association wants to hear from you.",
        ],
      },
    ],
  },
  {
    slug: "join-otam-membership",
    tag: "Community",
    title: "Membership: who OTAM is for, and how to join",
    dek: "Qualified therapists, technicians, students, associates and institutions — the association's doors are open, and membership is what turns a profession into a community.",
    date: "30 June 2026",
    readTime: "4 min read",
    image: A.community,
    imageAlt: "Members smiling together at a gathering",
    intro: [
      "Associations are only as strong as their membership. OTAM exists to represent occupational therapy in Malawi, and every new member strengthens that voice — in ministries, in universities, in clinics and in the communities the profession serves.",
      "Membership is open to qualified occupational therapists, occupational therapy technicians, students, and associate or institutional members — unrestricted by nationality, race, creed, colour, politics, gender or social status.",
    ],
    quote: {
      text:
        "Do, be and belong — membership is where the profession practises what it preaches.",
      cite: "OTAM Protocol & Membership sub-committee",
    },
    sections: [
      {
        heading: "Who can join",
        paragraphs: [
          "OTAM's constitution recognises four broad categories of membership, so that everyone with a stake in occupational therapy in Malawi has a place in the association.",
        ],
        list: [
          { lead: "Full membership:", rest: "qualified occupational therapists practising in Malawi or abroad." },
          { lead: "Technician membership:", rest: "qualified occupational therapy technicians — the backbone of much of the country's service delivery." },
          { lead: "Student membership:", rest: "students training towards OT or OT technician qualifications, at home or abroad." },
          { lead: "Associate & institutional:", rest: "allied professionals, partner organisations and institutions supporting the profession." },
        ],
      },
      {
        heading: "What membership gives you",
        paragraphs: [
          "Beyond the principle of it, membership is practical. Members carry the association's work — and the association carries its members' professional lives.",
          "You gain professional representation at national level, access to CPD programmes and conference rates, a professional network that spans clinics, NGOs and universities, national and international participation through the WFOT relationship, and a vote in the association that speaks for you. Membership also keeps the national registry of qualified practitioners alive — the register that employers, regulators and partners rely on.",
        ],
      },
      {
        heading: "How to join",
        paragraphs: [
          "Joining is straightforward: write to the association, request the membership form for your category, and return it with your proof of qualification. The Protocol & Membership sub-committee processes applications and brings them to the Executive Committee.",
          "If you are unsure which category fits you, ask — the committee would rather answer ten questions than lose one member.",
        ],
      },
    ],
  },
  {
    slug: "inclusive-schools-participation",
    tag: "Participation",
    title: "Inclusive schools: participation beyond the classroom walls",
    dek: "Occupational therapy in schools is not a clinical add-on. It is how children with disabilities get to do, be and belong alongside their peers — at the blackboard, in the yard and at home.",
    date: "18 April 2026",
    readTime: "5 min read",
    image: A.classroom,
    imageAlt: "Children learning together in a classroom",
    intro: [
      "A child's occupation is school. Not only the lessons — the friendships, the games at break, the walk home, the chores afterwards. When disability interrupts any of those occupations, occupational therapy has something to offer, and Malawi's push for inclusive education has put that work in sharper focus than ever.",
      "OTAM's members and partners work with teachers, families and community workers to make inclusion real, not just on enrolment forms but in the daily life of the classroom.",
    ],
    quote: {
      text:
        "Inclusion is measured at break time, not at enrolment. That is when you see who actually belongs.",
      cite: "OTAM Community & Inclusion portfolio",
    },
    sections: [
      {
        heading: "What OT brings to a school",
        paragraphs: [
          "Occupational therapists look at classrooms the way they look at any environment: which occupations does it demand, and where does a particular child's ability and the environment's demands fall out of step? The answer is rarely just the child. A desk too high, a routine too rigid, a peer group left unprepared — all are addressable.",
          "In practice this means assessment and direct therapy, yes, but also teacher coaching, low-cost adaptations, peer awareness work and follow-through into the home, where school progress survives or dies.",
        ],
      },
      {
        heading: "The technician advantage",
        paragraphs: [
          "Malawi's occupational therapy technicians are the reason school-based work can happen at scale. Trained in the same philosophy of participation and independence, they live in or near the communities they serve and can sustain a presence in schools that a visiting therapist alone never could.",
          "Supporting technicians — through CPD, supervision and a career path towards full professional qualification — is therefore not separate from inclusion work. It is the inclusion work.",
        ],
      },
      {
        heading: "Measure what matters",
        paragraphs: [
          "The inclusive schools agenda asks every partner the same hard question: what has changed for the child? Not in scores alone — in attendance, friendships, participation in school life and confidence at home. OTAM encourages its members working in schools to document and share those outcomes, so that the next school, and the next district, starts from evidence rather than enthusiasm.",
        ],
      },
    ],
  },
  {
    slug: "field-notes-rehab-malawi",
    tag: "Field notes",
    title: "Field notes: occupational therapy from the ward to the village",
    dek: "Between Blantyre's rehabilitation centres and village health posts lies most of Malawi. Field notes from the therapists and technicians practising along that whole distance.",
    date: "26 February 2026",
    readTime: "6 min read",
    image: A.otHands,
    imageAlt: "Hands at work in therapy",
    intro: [
      "Most portraits of occupational therapy in Malawi are taken in institutions: the rehabilitation ward, the clinic, the assessment room. Useful places, all of them — but the profession's daily life stretches far beyond, along the roads that carry patients home.",
      "This season of field notes gathers observations from members practising across that distance. They are offered in the spirit of the association's newsletter tradition: honest sharing, practitioner to practitioner.",
    ],
    quote: {
      text:
        "The therapy plan that cannot survive the bus journey home is not a therapy plan. It is a wish.",
      cite: "From a member's field notes, Southern Region",
    },
    sections: [
      {
        heading: "Where the work happens",
        paragraphs: [
          "At Kachere Rehabilitation Centre, occupational therapists work with patients recovering from spinal injuries and orthopaedic conditions — rebuilding not just movement but a life's worth of daily routines, from dressing to earning. At Sandi Rehabilitation, Assessment & Therapy Centre, children and adults receive assessment and therapy that for many families is the first professional recognition of a difficulty they have carried for years.",
          "Beyond the city walls, Motivation Malawi's wheelchair and assistive technology services meet families in their own communities, and community-based rehabilitation programmes carry therapy into homes, fields and market stalls.",
        ],
      },
      {
        heading: "What distance teaches",
        paragraphs: [
          "Therapists who practise across both settings describe a discipline shift. In the ward, the environment can be engineered around the patient. In the village, the plan must be engineered around the environment — the cooking fire, the maize plot, the long walk to water.",
          "That inversion is not a lesser form of occupational therapy. Members argue it is the discipline's purest expression: a profession defined by what people need and want to do, meeting people where they actually live.",
        ],
      },
      {
        heading: "Share yours",
        paragraphs: [
          "Field notes are collected for the association's newsletter and, with permission, for this journal. If you are practising — clinical, community or somewhere unclassifiable — and you have an observation that would help a colleague, write it down and send it. Somebody in a district you have never visited is probably facing the same thing this week.",
        ],
      },
    ],
  },
  {
    slug: "partners-network-wfot",
    tag: "Partnership",
    title: "A small profession, held together by its partnerships",
    dek: "From the World Federation to regional universities and disability organisations, OTAM's work travels on rails laid by its partners. A map of the network — and what each spoke carries.",
    date: "15 January 2026",
    readTime: "5 min read",
    image: A.village,
    imageAlt: "A village street scene in Malawi",
    intro: [
      "No occupational therapy association in a young profession moves alone. OTAM's constitution makes cooperation a duty, not a courtesy — with other allied professions, with government, with training institutions and with the wider international OT community.",
      "The network looks modest on an organisation chart. In practice, it is how Malawian occupational therapy gets its standards, its students, its wheelchairs and its voice.",
    ],
    quote: {
      text:
        "Partnership is not an extra activity for a small profession. It is the profession's oxygen.",
      cite: "OTAM Executive Committee",
    },
    sections: [
      {
        heading: "The global spoke: WFOT",
        paragraphs: [
          "OTAM keeps close contact with the World Federation of Occupational Therapists, the global peak body for the profession. The connection is more than symbolic: WFOT minimum standards anchor the education agenda, WFOT channels connect Malawian practitioners to international continuing development, and the federation's recognition matters every time Malawian qualifications travel across a border.",
        ],
      },
      {
        heading: "The regional spoke: education partners",
        paragraphs: [
          "Because Malawian occupational therapists have trained largely outside the country, universities in the region — including the University of the Western Cape — are woven into the profession's story. OTAM works to keep that relationship two-way: alumni returning as guest teachers, placement exchanges flowing both directions, and curriculum conversations that anticipate the day Malawi trains its own.",
        ],
      },
      {
        heading: "The service spokes: clinics & disability organisations",
        paragraphs: [
          "On the ground, the association works alongside the services and organisations delivering care: Kachere Rehabilitation Centre in the medical rehabilitation system, Sandi Rehabilitation, Assessment & Therapy Centre in paediatric and adult therapy, and Motivation in wheelchairs and assistive technology across the country.",
          "Each partnership follows the same logic as the profession itself — stronger together, and always in service of participation for the people of Malawi. Organisations interested in working with OTAM are invited to make contact.",
        ],
      },
    ],
  },
];

export const FEATURED_POST = POSTS.find((p) => p.featured) ?? POSTS[0];

/** Grid posts: everything except the featured one, newest first. */
export const GRID_POSTS = POSTS.filter((p) => !p.featured);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Up to three other posts for the related-stories band. */
export function getRelated(slug: string, count = 3): Post[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
