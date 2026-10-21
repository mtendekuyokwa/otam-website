import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteFooter } from "~/components/SiteFooter";
import { PageHero } from "~/components/PageHero";
import { RevealImage } from "~/components/RevealImage";
import { A } from "~/lib/assets";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

const COMMITTEE = [
  { name: "Sally Palmer", role: "President", photo: A.pSally },
  { name: "Hlupekire Jenda", role: "Vice President", photo: A.pHlupekire },
  { name: "John Khonje", role: "Secretary", photo: A.pJohn },
  { name: "Canaan Zimba", role: "Vice Secretary", photo: A.pCanaan },
  { name: "Chiwemi Manduwa", role: "Treasurer", photo: A.pChiwemi },
  { name: "Tessie Kalobekamo", role: "Committee Member", photo: A.pTessie },
  { name: "Osman Mdala", role: "Committee Member", photo: A.pOsman },
] as const;

const SUBCOMMITTEES = [
  "CPD",
  "Protocol & membership",
  "Fundraising",
  "Marketing",
  "Advocacy & social calendar",
  "Media & publicity",
  "Social welfare",
] as const;

const CATEGORIES = [
  { title: "Qualified Occupational Therapists", note: "Practising OTs in Malawi and abroad" },
  { title: "OT Technicians", note: "Qualified occupational therapy technicians" },
  { title: "Students", note: "OT and OT technician students in training" },
  { title: "Associate & institutional", note: "Allied professionals and partner organisations" },
] as const;

const BENEFITS = [
  "Professional representation",
  "CPD opportunities",
  "Networking",
  "Access to resources",
  "National & international participation",
] as const;

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — OTAM" },
      {
        name: "description",
        content:
          "Meet the OTAM Executive Committee and the sub-committees guiding occupational therapy in Malawi.",
      },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <main>
      <PageHero
        kicker="Our people"
        titleLine1="The Executive"
        titleAccent="Committee"
        sub="OTAM is governed by an elected Executive Committee, supported by sub-committees responsible for the association's day-to-day work."
        image={A.community}
      />

      {/* Committee grid */}
      <section className="bg-[#F6F4EE]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl leading-[1.15] max-w-[640px]"
            style={interTight}
          >
            Elected to{" "}
            <span className="italic" style={playfair}>
              serve
            </span>{" "}
            the profession
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {COMMITTEE.map((m, i) => (
              <article
                key={m.name}
                className="bg-white rounded-[28px] p-5 flex flex-col gap-4"
              >
                <RevealImage
                  src={m.photo}
                  alt={m.name}
                  className="h-[280px] rounded-2xl"
                  duration={0.9}
                  delay={(i % 4) * 0.07}
                  hover
                  overlay={
                    <span
                      className="absolute bottom-3 left-3 h-8 px-4 rounded-full bg-black/45 backdrop-blur-md text-white text-sm flex items-center transition-colors duration-300 group-hover:bg-[#F0B429] group-hover:text-[#15221B] group-hover:shadow-[0_4px_16px_rgba(240,180,41,0.35)]"
                      style={sfPro}
                    >
                      {m.role}
                    </span>
                  }
                />
                <h3 className="text-xl leading-snug px-1 pb-1" style={interTight}>
                  {m.name}
                </h3>
              </article>
            ))}

            {/* Join card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="rounded-[28px] p-5 bg-[#15221B] text-white flex flex-col justify-between gap-6"
            >
              <p className="text-2xl leading-snug" style={interTight}>
                <span className="italic text-[#F0B429]" style={playfair}>
                  Your seat
                </span>{" "}
                at the table is open.
              </p>
              <p className="text-white/55 leading-relaxed" style={sfPro}>
                The next committee formation includes you. Add your voice to
                the association.
              </p>
              <Link
                to="/contact"
                className="btn-press h-12 px-6 rounded-full bg-white text-black text-lg font-medium hover:bg-neutral-100 flex items-center justify-center w-fit"
                style={sfPro}
              >
                Join OTAM
              </Link>
            </motion.div>
          </div>

          {/* Sub-committees */}
          <div className="flex flex-col gap-6 mt-20">
            <span className="text-[#15221B]/35 text-xs tracking-[0.25em] uppercase" style={interTight}>
              Supported by sub-committees
            </span>
            <div className="flex flex-wrap gap-3">
              {SUBCOMMITTEES.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="min-h-12 h-auto py-2 px-6 rounded-full bg-white border border-black/8 flex items-center text-[#15221B]/80 text-base sm:text-lg whitespace-normal"
                  style={sfPro}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl leading-[1.15] max-w-[560px]"
              style={interTight}
            >
              Who can{" "}
              <span className="italic" style={playfair}>
                join
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-lg text-[#15221B]/60 max-w-[380px]"
              style={sfPro}
            >
              Membership is open to everyone in the profession — unrestricted
              by nationality, race, creed, colour, politics, gender or social
              status.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-[#F6F4EE] rounded-3xl p-7 flex flex-col gap-3"
              >
                <h3 className="text-xl leading-snug" style={interTight}>
                  {c.title}
                </h3>
                <p className="text-[#15221B]/55 leading-snug" style={sfPro}>
                  {c.note}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-10">
            <span className="text-[#15221B]/35 text-xs tracking-[0.25em] uppercase" style={interTight}>
              Member benefits
            </span>
            {BENEFITS.map((b) => (
              <span
                key={b}
                className="min-h-10 h-auto py-1.5 px-4 rounded-full bg-[#2E7D5B]/8 border border-[#2E7D5B]/20 flex items-center text-[#15221B]/75 whitespace-normal"
                style={sfPro}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
