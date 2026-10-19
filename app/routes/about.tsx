import type { Route } from "./+types/about";
import { Link } from "react-router";
import { pexels, photos } from "~/data/images";
import { focusAreas, workplaces } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — OTAM" },
    {
      name: "description",
      content:
        "Learn about the Occupational Therapy Association of Malawi: our mission, objectives and how OTs serve Malawians every day.",
    },
  ];
}

const pillars = [
  {
    title: "Vision",
    body: "A Malawi where occupational therapy is understood, valued and delivered to every community that needs it.",
    tint: "bg-white",
  },
  {
    title: "Mission",
    body: "To promote the profession, represent OT to policy makers and regulators, and connect Malawian OTs to each other and to the world.",
    tint: "bg-white",
  },
  {
    title: "Values",
    body: "Professionalism, equity of access, evidence-informed practice, and development of Malawian expertise — regardless of nationality, race, creed, colour, politics, gender or social status.",
    tint: "bg-white",
  },
];

const objectives = [
  "Act as the official national organisation promoting the occupational therapy profession.",
  "Represent the profession to policy makers, regulatory bodies, management and training sectors.",
  "Contribute OT expertise to general policy on promotive, preventive, curative and rehabilitative health.",
  "Establish and maintain professional ethics and standards of conduct, reviewed biannually.",
  "Maintain educational standards meeting the minimum standards of the World Federation of Occupational Therapists.",
  "Maintain a registry of qualified occupational therapists within Malawi.",
  "Promote continuing professional development and, in time, postgraduate OT education.",
  "Encourage scientific research and cooperation among OTs and allied health professionals.",
  "Publish a professional newsletter and publicise OT among the general public and healthcare system.",
  "Raise funds by lawful means to further the development of OT within Malawi.",
];

export default function About() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-ink/5 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            About OTAM
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            The association behind Malawi's occupational therapists.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            OTAM is a national, independent, voluntary professional body. It
            exists so that occupational therapy in Malawi has a voice, a
            standard, and a plan for growing the profession at home.
          </p>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-ink/10 bg-white p-7 shadow-sm"
            >
              <h2 className="font-display text-xl font-bold tracking-tight text-brand-800">
                {p.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              What the association stands for
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              The objectives of OTAM
            </h2>
          </div>
        </div>
        <ol className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {objectives.map((o, i) => (
            <li key={o} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-xs font-extrabold text-brand-800">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="leading-relaxed text-ink-soft">{o}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* OT in Malawi */}
      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              OT in Malawi
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Small profession, wide reach.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Roughly ten occupational therapists serve all of Malawi today —
              working in national rehabilitation, private practice and
              community programmes. Every OT in the country was trained
              abroad. That is exactly the gap OTAM's five-year plan is designed
              to close.
            </p>
            {/* Where OTs work cards */}
            <ul className="mt-8 space-y-4">
              {workplaces.map((w) => (
                <li
                  key={w.name}
                  className="flex gap-4 rounded-2xl bg-cream p-4"
                >
                  <img
                    src={pexels(photos[w.photo], { w: 200, h: 200 })}
                    alt=""
                    aria-hidden
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold">
                      {w.name}
                      <span className="ml-2 text-xs font-medium uppercase tracking-wide text-brand-700">
                        {w.city}
                      </span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {w.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={pexels(photos.physioTable, { w: 900, h: 1000 })}
              alt="A rehabilitation session in progress"
              className="w-full rounded-3xl object-cover shadow-sm"
              loading="lazy"
            />
            <img
              src={pexels(photos.mentalHealth, { w: 500, h: 420 })}
              alt=""
              aria-hidden
              className="absolute -bottom-6 -left-4 hidden w-44 rounded-2xl object-cover shadow-lg ring-4 ring-white sm:block"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Fields of practice
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Where OT makes the difference
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <article
              key={area.n}
              className="rounded-3xl bg-cream-deep p-6 transition hover:bg-brand-50"
            >
              <p className="font-display text-sm font-bold text-accent-600">
                {area.n}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {area.blurb}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Talk to the association →
          </Link>
        </div>
      </section>
    </>
  );
}
