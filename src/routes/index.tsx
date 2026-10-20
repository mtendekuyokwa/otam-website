import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Accessibility,
  ArrowUpRight,
  Baby,
  Brain,
  GraduationCap,
  HeartPulse,
  Trees,
} from "lucide-react";
import { SiteHeader } from "~/components/SiteHeader";
import { SiteFooter } from "~/components/SiteFooter";
import { RevealImage } from "~/components/RevealImage";
import { A, HERO_ROTATION } from "~/lib/assets";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

const AREAS = [
  { label: "Pediatrics", icon: Baby },
  { label: "Mental health", icon: Brain },
  { label: "Rehabilitation", icon: HeartPulse },
  { label: "Schools", icon: GraduationCap },
  { label: "Community-based rehab", icon: Trees },
  { label: "Disability inclusion", icon: Accessibility },
] as const;

type Affiliate = {
  name: string;
  short: string;
  logo: string;
  href: string;
  role: string;
  dark?: boolean;
};

/**
 * Organizations featured on OTAM's own site (otamalawi.wordpress.com)
 * and named in OTAM's objectives — with their official logos (public/logos/).
 */
const AFFILIATES: Affiliate[] = [
  {
    name: "World Federation of Occupational Therapists",
    short: "WFOT",
    logo: "/logos/wfot.svg",
    href: "https://wfot.org/",
    role: "Global peak body",
  },
  {
    name: "Kachere Rehabilitation Centre",
    short: "Kachere",
    logo: "/logos/map-kachere.png",
    href: "https://www.mapmw.org/",
    role: "Medical rehab · Blantyre",
  },
  {
    name: "Sandi Rehabilitation, Assessment & Therapy Centre",
    short: "Sandi",
    logo: "/logos/sandi.jpg",
    href: "https://www.facebook.com/SandiRATC/",
    role: "Pediatric therapy",
  },
  {
    name: "Motivation",
    short: "Motivation",
    logo: "/logos/motivation.png",
    href: "https://motivation.org.uk/",
    role: "Wheelchairs & AT",
    dark: true,
  },
  {
    name: "University of the Western Cape",
    short: "UWC",
    logo: "/logos/uwc.svg",
    href: "https://www.uwc.ac.za/",
    role: "OT education partner",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OTAM — Occupational Therapy Association of Malawi" },
      {
        name: "description",
        content:
          "OTAM is the national, voluntary professional body for occupational therapists in Malawi — advancing practice, education, research and advocacy.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <AffiliatesStrip />
      <MissionStrip />
      <PictureBoard />
      <WhatIsOt />
      <VisionBand />
      <Highlights />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}

/* ———————————————————————— Hero ———————————————————————— */

function Hero() {
  const reduce = useReducedMotion();
  const [frame, setFrame] = useState(0);

  /* Slow slideshow: one scene every 7s, crossfading over 1.4s. */
  useEffect(() => {
    if (reduce || HERO_ROTATION.length < 2) return;
    const id = setInterval(
      () => setFrame((f) => (f + 1) % HERO_ROTATION.length),
      7000,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative min-h-screen w-full text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#101B14]">
      {/* backdrop opens like a window on load, then lives — Malawian practice
          scenes slowly crossfade while each one drifts on a mirror-zoom */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduce ? undefined : { clipPath: "inset(0 0 100% 0)" }}
        animate={reduce ? undefined : { clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
        aria-hidden
      >
        {HERO_ROTATION.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{
              opacity: frame === i ? 1 : 0,
              scale: reduce ? 1 : [1.06, 1.16],
            }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: {
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-[#101B14] z-0" />
      {/* rising-sun glow, echoing the OTAM mark */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 55% at 50% 108%, rgba(212,89,59,0.35) 0%, rgba(240,180,41,0.16) 34%, rgba(0,0,0,0) 68%)",
        }}
      />

      <SiteHeader />

      {/* Center content */}
      <div className="w-full max-w-[900px] mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 text-center my-auto z-10 px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="h-9 px-5 rounded-full border border-white/40 text-white/80 text-sm flex items-center tracking-[0.14em] uppercase"
          style={interTight}
        >
          Occupational Therapy Association of Malawi
        </motion.span>

        <h1
          className="text-white text-[44px] sm:text-[64px] md:text-[76px] lg:text-[84px] font-normal leading-[1.04] tracking-tight"
          style={interTight}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Helping every Malawian
          </motion.span>
          <motion.span
            className="block text-[#F0B429]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="italic" style={playfair}>
              do, be &amp; belong
            </span>
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            through occupational therapy
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/about"
            className="btn-press h-12 md:h-14 px-7 bg-white text-black rounded-2xl inline-flex items-center text-lg md:text-xl font-medium hover:bg-neutral-200 shadow-lg"
            style={sfPro}
          >
            About OTAM
          </Link>
          <Link
            to="/contact"
            className="btn-press h-12 md:h-14 px-7 border border-white/40 text-white rounded-2xl inline-flex items-center text-lg md:text-xl font-medium hover:bg-white/10"
            style={sfPro}
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      {/* Hero footer */}
      <footer className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10">
        <div
          className="w-full md:w-[480px] max-w-prose text-white/80 text-xl leading-[1.35] text-left"
          style={sfPro}
        >
          <AnimatedWords
            baseDelay={0.95}
            stepMs={35}
            text="OTAM is the national, independent, voluntary professional body for occupational therapists in Malawi — representing the profession, growing its people and connecting its partners."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="flex flex-row flex-wrap lg:flex-col items-center lg:items-end gap-2.5 w-full md:w-auto justify-end"
        >
          <div
            className="h-[56px] px-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl flex items-center whitespace-nowrap"
            style={sfPro}
          >
            Health · Education · Social sectors
          </div>
          <Link
            to="/blog/$slug"
            params={{ slug: "national-conference-2026" }}
            aria-label="Read the blog story: OTAM's first national conference — first of its kind"
            className="btn-press group flex items-center gap-2 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] hover:drop-shadow-[0_6px_20px_rgba(240,180,41,0.25)] transition-[filter] duration-300"
          >
            <span className="h-[56px] w-[56px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 text-[#F0B429] transition-colors duration-300 group-hover:border-[#F0B429]/60">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span
              className="h-[56px] px-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl flex items-center whitespace-nowrap transition-colors duration-300 group-hover:border-[#F0B429]/60"
              style={sfPro}
            >
              Conference 2026 · First of its kind
            </span>
          </Link>
        </motion.div>
      </footer>
    </section>
  );
}

function AnimatedWords({
  text,
  baseDelay,
  stepMs = 35,
}: {
  text: string;
  baseDelay: number;
  stepMs?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + i * (stepMs / 1000),
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

/* ———————————————————————— Affiliates strip ———————————————————————— */

function AffiliatesStrip() {
  return (
    <section
      aria-label="Affiliated organizations and network partners"
      className="bg-[#15221B] text-white py-20 border-y border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span
              className="text-[#F0B429] text-xs tracking-[0.22em] uppercase font-medium"
              style={interTight}
            >
              Global &amp; National Network
            </span>
            <h2
              className="text-2xl md:text-3xl text-white tracking-tight mt-1"
              style={interTight}
            >
              Affiliated{" "}
              <span className="italic text-[#F0B429]" style={playfair}>
                Organizations &amp; Partners
              </span>
            </h2>
          </div>
          <p
            className="text-white/50 text-base max-w-[420px] md:text-right"
            style={sfPro}
          >
            OTAM keeps close contact with the WFOT and other OT associations,
            and works with the clinics and partners serving Malawi.
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {AFFILIATES.map(({ name, short, logo, href, role, dark }, i) => (
            <motion.a
              key={short}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] rounded-2xl"
            >
              <div
                className={`h-28 rounded-2xl flex items-center justify-center p-5 transition-transform duration-300 group-hover:-translate-y-1 ${
                  dark ? "bg-[#1E6E4F]" : "bg-white"
                }`}
              >
                <img
                  src={logo}
                  alt={`${name} logo`}
                  loading="lazy"
                  className={
                    dark
                      ? "max-h-full max-w-full object-contain"
                      : "max-h-14 w-auto max-w-full object-contain"
                  }
                />
              </div>
              <div className="px-1">
                <span
                  className="block text-white/90 text-sm font-medium leading-snug"
                  style={interTight}
                >
                  {short}
                </span>
                <span
                  className="block text-white/45 text-xs tracking-wider uppercase mt-0.5"
                  style={sfPro}
                >
                  {role}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ———————————————————————— Mission strip ———————————————————————— */

function MissionStrip() {
  return (
    <section className="bg-[#F6F4EE]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl leading-[1.15] text-[#15221B]"
          style={interTight}
        >
          OT in Malawi is a{" "}
          <span className="italic" style={playfair}>
            small profession
          </span>{" "}
          with a big job — and we're building it together.
        </motion.h2>

        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg leading-relaxed text-[#15221B]/70"
            style={sfPro}
          >
            From rehabilitation wards in Blantyre to classrooms and village
            health posts, occupational therapists restore the everyday
            skills that make life possible. OTAM exists so their voice is
            heard, their standards stay high, and their numbers grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-2.5"
          >
            {AREAS.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="h-10 px-4 rounded-full bg-white border border-black/8 flex items-center gap-2 text-[#15221B]/80 text-base"
                style={sfPro}
              >
                <Icon className="w-4 h-4 text-[#2E7D5B]" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ———————————————————————— Where OTs work ———————————————————————— */

const PLACES = [
  {
    title: "Kachere Rehabilitation Centre",
    place: "Blantyre",
    note: "Rehabilitation for spinal injury and orthopaedic patients",
    image: A.rehab,
  },
  {
    title: "Sandi Rehabilitation, Assessment & Therapy Clinic",
    place: "Blantyre",
    note: "Assessment and therapy services for children and adults",
    image: A.childCare,
  },
  {
    title: "Motivation Malawi",
    place: "Nationwide",
    note: "Wheelchairs and assistive technology in the community",
    image: A.village,
  },
  {
    title: "Community & school programmes",
    place: "Across Malawi",
    note: "Outreach, inclusive education and disability advocacy",
    image: A.outreach,
  },
];

function PictureBoard() {
  return (
    <section className="bg-white">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2
            className="text-4xl md:text-5xl leading-[1.15] text-[#15221B] max-w-[640px]"
            style={interTight}
          >
            Where OTs{" "}
            <span className="italic" style={playfair}>
              work
            </span>{" "}
            in Malawi
          </h2>
          <p className="text-lg text-[#15221B]/60 max-w-[380px]" style={sfPro}>
            A small number of occupational therapists — and occupational
            therapy technicians — serve all three regions of the country.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLACES.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col gap-4"
            >
              <RevealImage
                src={p.image}
                alt={p.title}
                className="h-[260px] rounded-3xl"
                duration={0.9}
                delay={i * 0.08}
                hover
                imgClassName="img-hover-zoom group-hover:saturate-[1.08]"
                overlay={
                  <span
                    className="absolute top-4 left-4 h-8 px-4 rounded-full bg-black/45 backdrop-blur-md text-white text-sm flex items-center transition-colors duration-300 group-hover:bg-[#F0B429] group-hover:text-[#15221B] group-hover:shadow-[0_4px_16px_rgba(240,180,41,0.35)]"
                    style={sfPro}
                  >
                    {p.place}
                  </span>
                }
              />
              <div className="flex flex-col gap-1.5 px-1">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
                  className="text-xl leading-snug text-[#15221B]" style={interTight}
                >
                  {p.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.55 + i * 0.08, duration: 0.5 }}
                  className="text-[#15221B]/60 text-base leading-snug" style={sfPro}
                >
                  {p.note}
                </motion.p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ———————————————————————— What is OT ———————————————————————— */

function WhatIsOt() {
  return (
    <section className="bg-[#F6F4EE] border-y border-black/5">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 grid gap-12 lg:grid-cols-2 items-center">
        <RevealImage
          src={A.otHands}
          alt="Hands practising fine-motor therapy"
          className="h-[420px] rounded-[28px]"
          duration={1.0}
        />

        <div className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl leading-[1.15] text-[#15221B]"
            style={interTight}
          >
            What is{" "}
            <span className="italic" style={playfair}>
              occupational therapy?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg leading-relaxed text-[#15221B]/70"
            style={sfPro}
          >
            Occupational therapy helps people of all ages take part in the
            activities — the "occupations" — of everyday life: self-care,
            work, school, play and community. After injury, illness or
            disability, it's how people relearn and reshape daily living.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {AREAS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="py-3 px-5 rounded-2xl bg-white flex items-center gap-3 text-[#15221B]/80"
                style={sfPro}
              >
                <Icon className="w-4.5 h-4.5 text-[#2E7D5B] shrink-0" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ———————————————————————— Vision band ———————————————————————— */

function VisionBand() {
  return (
    <section className="bg-[#15221B] text-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-28 flex flex-col items-center gap-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/35 text-xs tracking-[0.25em] uppercase"
          style={interTight}
        >
          Our vision
        </motion.span>
        <motion.blockquote
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl leading-[1.25]"
          style={interTight}
        >
          Meaningful participation, independence, social inclusion and
          wellbeing{" "}
          <span className="italic text-[#F0B429]" style={playfair}>
            for all people in Malawi
          </span>{" "}
          — through occupational therapy.
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-white/60 text-lg max-w-[680px] leading-relaxed"
          style={sfPro}
        >
          Our mission is to advance the practice, education, research and
          advocacy of occupational therapy in Malawi through professional
          leadership, capacity building, ethical practice and collaboration.
        </motion.p>
      </div>
    </section>
  );
}

/* ———————————————————————— Highlights ———————————————————————— */

const HIGHLIGHTS = [
  {
    slug: "national-conference-2026",
    title: "National Conference 2026",
    body: "OTAM's first full scientific conference — tracks, workshops, abstracts and accommodation for OTs across Malawi and the region.",
    image: A.lectureHall,
    tag: "Events",
  },
  {
    slug: "ot-education-in-malawi",
    title: "Education & CPD",
    body: "Workshops, mentorship and continuing professional development — working towards an OT course trained and built in Malawi.",
    image: A.students,
    tag: "Growth",
  },
  {
    slug: "join-otam-membership",
    title: "Membership",
    body: "Open to qualified OTs, OT technicians, students and associate or institutional members — unrestricted by race, creed, gender or politics.",
    image: A.community,
    tag: "Community",
  },
];

function Highlights() {
  return (
    <section className="bg-white">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2
            className="text-4xl md:text-5xl leading-[1.15] text-[#15221B] max-w-[560px]"
            style={interTight}
          >
            What we're{" "}
            <span className="italic" style={playfair}>
              building
            </span>
          </h2>
          <p className="text-lg text-[#15221B]/60 max-w-[380px]" style={sfPro}>
            Three things carry our five-year plan to train occupational
            therapists here at home.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Link
              key={h.slug}
              to="/blog/$slug"
              params={{ slug: h.slug }}
              aria-label={`Read the blog story: ${h.title}`}
              className="group flex flex-col gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] focus-visible:rounded-3xl"
            >
              <RevealImage
                src={h.image}
                alt={h.title}
                className="h-[300px] rounded-3xl"
                duration={0.9}
                delay={i * 0.07}
                hover
                imgClassName="img-hover-zoom group-hover:saturate-[1.08]"
                overlay={
                  <>
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
                    <span
                      className="absolute bottom-4 left-4 h-9 px-4 rounded-full bg-white/15 backdrop-blur-md text-white text-sm flex items-center tracking-[0.1em] uppercase transition-colors duration-300 group-hover:bg-[#F0B429] group-hover:text-[#15221B] group-hover:shadow-[0_4px_16px_rgba(240,180,41,0.35)]"
                      style={interTight}
                    >
                      {h.tag}
                    </span>
                  </>
                }
              />
              <div className="flex flex-col gap-2 px-1 pb-2">
                <h3
                  className="text-2xl text-[#15221B] flex items-start justify-between gap-3 transition-colors duration-300 group-hover:text-[#2E7D5B]"
                  style={interTight}
                >
                  {h.title}
                  <ArrowUpRight
                    className="w-5 h-5 mt-1 shrink-0 text-[#15221B]/25 transition-all duration-300 group-hover:text-[#F0B429] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </h3>
                <p className="text-[#15221B]/60 text-base leading-relaxed" style={sfPro}>
                  {h.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ———————————————————————— CTA band ———————————————————————— */

function CtaBand() {
  return (
    <section className="bg-[#2E7D5B] text-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl leading-[1.15] max-w-[720px]"
          style={interTight}
        >
          Therapist, student or partner —{" "}
          <span className="italic" style={playfair}>
            there's a place for you at OTAM.
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="btn-press h-14 px-8 bg-white text-[#15221B] rounded-2xl inline-flex items-center text-xl font-medium hover:bg-neutral-100 shadow-lg whitespace-nowrap"
            style={sfPro}
          >
            Contact the association
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
