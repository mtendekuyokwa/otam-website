import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Flag, HandHeart, Megaphone, Network, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { PageHero } from "~/components/PageHero";
import { SiteFooter } from "~/components/SiteFooter";
import { A } from "~/lib/assets";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

const VALUES = [
  "Professionalism",
  "Ethical & accountable practice",
  "Inclusivity & equity",
  "Evidence-based practice",
  "Advocacy & leadership",
  "Collaboration & partnership",
] as const;

const OBJECTIVES = [
  {
    no: "01",
    title: "Represent",
    icon: Flag,
    items: [
      "Act as the official national voice of occupational therapy in Malawi",
      "Represent the profession to policy makers, regulatory bodies, management and training sectors",
      "Bring OT expertise into national policy — promotion, prevention, curative and rehabilitative health",
      "Comment on social and political issues affecting medical rehabilitation",
    ],
  },
  {
    no: "02",
    title: "Uphold",
    icon: ShieldCheck,
    items: [
      "Establish and maintain professional ethics, standards and codes of conduct",
      "Set proficient standards for OT practice and education, aligned to WFOT minimum standards",
      "Maintain the national registry of qualified occupational therapists",
    ],
  },
  {
    no: "03",
    title: "Grow",
    icon: TrendingUp,
    items: [
      "Champion continuing professional development and, in time, postgraduate OT education",
      "Encourage scientific research in occupational therapy",
      "Open regional branches of OTAM as membership grows",
    ],
  },
  {
    no: "04",
    title: "Connect",
    icon: Network,
    items: [
      "Promote cooperation among OTs and all allied health professions",
      "Keep close contact with the World Federation of Occupational Therapists and sister associations",
      "Facilitate the exchange and placement of OTs across Malawi's clinical services",
      "Publish a professional newsletter for members and partners",
    ],
  },
  {
    no: "05",
    title: "Champion",
    icon: Megaphone,
    items: [
      "Publicise OT among the general public and at every level of the healthcare system",
      "Raise funds, by lawful means, to further the development of OT within Malawi",
    ],
  },
] as const;

const ACTIVITIES = [
  "CPD programmes",
  "Conferences & workshops",
  "Advocacy for disability inclusion",
  "Community outreach",
  "Research & publications",
  "Partnerships with government & NGOs",
] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OTAM" },
      {
        name: "description",
        content:
          "OTAM is a national, independent, voluntary professional body promoting occupational therapy in Malawi — its practice, education, research and advocacy.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero
        kicker="About OTAM"
        titleLine1="A national voice for"
        titleAccent="occupational therapy"
        sub="A national, independent, voluntary professional body — membership unrestricted by nationality, race, creed, colour, politics, gender or social status."
        image={A.village}
      />

      {/* Our story */}
      <section className="bg-[#F6F4EE]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#15221B]/35 text-xs tracking-[0.25em] uppercase" style={interTight}>
              Our story
            </span>
            <h2 className="text-4xl md:text-5xl leading-[1.15]" style={interTight}>
              Built to{" "}
              <span className="italic" style={playfair}>
                unite &amp; grow
              </span>{" "}
              the profession
            </h2>
            <div className="text-lg leading-relaxed text-[#15221B]/70 flex flex-col gap-4" style={sfPro}>
              <p>
                The Occupational Therapy Association of Malawi was
                established to unite occupational therapy professionals,
                promote the growth of the profession, and advocate for the
                role of OT in improving health, wellbeing and participation
                across the lifespan.
              </p>
              <p>
                Today OTAM serves as a platform for professional
                development, collaboration and representation of
                occupational therapists within Malawi's health, education
                and social sectors — working with government ministries,
                training institutions, NGOs and international partners.
              </p>
            </div>
            <Link
              to="/team"
              className="btn-press w-fit h-12 px-6 bg-[#15221B] text-white rounded-2xl inline-flex items-center gap-2 text-lg font-medium hover:bg-[#1f3327]"
              style={sfPro}
            >
              Meet the executive committee
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </motion.div>

          {/* Vision & mission */}
          <div className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[28px] p-8 md:p-10 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2E7D5B]/10 flex items-center justify-center">
                <Eye className="w-5.5 h-5.5 text-[#2E7D5B]" />
              </div>
              <h3 className="text-2xl" style={interTight}>
                Vision
              </h3>
              <p className="text-lg leading-relaxed text-[#15221B]/70" style={sfPro}>
                To promote meaningful participation, independence, social
                inclusion and wellbeing for all people in Malawi through
                occupational therapy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="bg-[#15221B] text-white rounded-[28px] p-8 md:p-10 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Target className="w-5.5 h-5.5 text-[#F0B429]" />
              </div>
              <h3 className="text-2xl" style={interTight}>
                Mission
              </h3>
              <p className="text-lg leading-relaxed text-white/65" style={sfPro}>
                To advance the practice, education, research and advocacy of
                occupational therapy in Malawi through professional
                leadership, capacity building, ethical practice and
                collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-20 flex flex-col items-start gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl" style={interTight}
          >
            What we{" "}
            <span className="italic" style={playfair}>
              stand for
            </span>
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {VALUES.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="h-12 px-6 rounded-full bg-[#2E7D5B]/8 border border-[#2E7D5B]/20 flex items-center gap-2.5 text-[#15221B]/80 text-lg"
                style={sfPro}
              >
                <HandHeart className="w-4.5 h-4.5 text-[#2E7D5B]" />
                {v}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl leading-[1.15] max-w-[720px]" style={interTight}
          >
            Five things OTAM{" "}
            <span className="italic" style={playfair}>
              exists to do
            </span>
          </motion.h2>

          <div className="border-b border-black/8 mt-14">
            {OBJECTIVES.map((pillar, pi) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.no}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: pi * 0.05, duration: 0.6 }}
                  className="grid gap-6 lg:grid-cols-[150px_250px_1fr] items-start py-10 border-t border-black/8 group"
                >
                  <span
                    className="italic text-6xl md:text-7xl leading-none text-[#2E7D5B]/25 group-hover:text-[#2E7D5B]/60 transition-colors"
                    style={playfair}
                  >
                    {pillar.no}
                  </span>

                  <div className="flex items-center gap-4 lg:pt-1">
                    <span className="w-11 h-11 rounded-2xl bg-[#2E7D5B]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#2E7D5B]" />
                    </span>
                    <h3 className="text-3xl" style={interTight}>
                      {pillar.title}
                    </h3>
                  </div>

                  <ul className="flex flex-col gap-3 lg:pt-1.5">
                    {pillar.items.map((item, ii) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.15 + ii * 0.08, duration: 0.45 }}
                        className="flex items-start gap-3.5 text-[#15221B]/75 text-lg leading-snug"
                        style={sfPro}
                      >
                        <span className="mt-[9px] w-2 h-2 rounded-full bg-[#D4593B] shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key activities */}
      <section className="bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <span className="text-[#15221B]/35 text-xs tracking-[0.25em] uppercase" style={interTight}>
              Key activities
            </span>
            <h2 className="text-4xl md:text-5xl leading-[1.15]" style={interTight}>
              How we{" "}
              <span className="italic" style={playfair}>
                show up
              </span>{" "}
              year-round
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-3">
            {ACTIVITIES.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="py-4 px-6 rounded-2xl bg-[#F6F4EE] flex items-center gap-3 text-[#15221B]/80 text-lg"
                style={sfPro}
              >
                <span className="w-2 h-2 rounded-full bg-[#D4593B] shrink-0" />
                {a}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
