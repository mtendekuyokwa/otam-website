import type { Route } from "./+types/home";
import { Link } from "react-router";
import { pexels, photos } from "~/data/images";
import { focusAreas, workplaces } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OTAM — Occupational Therapy Association of Malawi" },
    {
      name: "description",
      content:
        "OTAM is a national, independent, voluntary professional body representing occupational therapists across Malawi.",
    },
  ];
}

const heroStats = [
  { value: "~10", label: "OTs practicing nationwide" },
  { value: "5-yr", label: "plan to open an OT course in Malawi" },
  { value: "2026", label: "first full conference in the pipeline" },
];

export default function Home() {
  return (
    <>
      {/* ————— Hero (Sphere-style headline + Roveia-style stat) ————— */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-800">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              National professional body · Malawi
            </p>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Helping occupational therapy{" "}
              <span className="text-brand-700">take root</span> in Malawi.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              OTAM is a national, independent, voluntary professional body — the
              membership of which is unrestricted by nationality, race, creed,
              colour, politics, gender or social status.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                Learn about OTAM
              </Link>
              <Link
                to="/team"
                className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-600 hover:text-brand-700"
              >
                Meet the team
              </Link>
            </div>

            {/* Stat row */}
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold tracking-tight text-brand-800 sm:text-4xl">
                    {s.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium leading-snug text-ink-soft">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Collage (Sphere-style portrait grid) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 sm:gap-4">
              <img
                src={pexels(photos.heroChildClinic, { w: 900, h: 1100 })}
                alt="A clinician checking a child at a community clinic"
                className="col-span-3 row-span-5 rounded-3xl object-cover shadow-sm"
                loading="eager"
              />
              <img
                src={pexels(photos.heroDoctor, { w: 600, h: 640 })}
                alt="A smiling occupational therapist in uniform"
                className="col-span-2 row-span-3 rounded-3xl object-cover shadow-sm"
                loading="eager"
              />
              <img
                src={pexels(photos.scrabbleTherapy, { w: 600, h: 420 })}
                alt="The word therapy spelled out in letter tiles"
                className="col-span-2 row-span-2 rounded-3xl object-cover shadow-sm"
              />
            </div>

            {/* Floating badge (Roveia-style metric card) */}
            <div className="absolute -bottom-5 left-4 hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-ink/5 sm:block">
              <p className="font-display text-2xl font-extrabold text-brand-800">
                WFO
              </p>
              <p className="text-xs font-medium text-ink-soft">
                Standards aligned with the World Federation of Occupational
                Therapists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Where OTs work strip ————— */}
      <section className="border-y border-ink/10 bg-cream-deep">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
            Where OTs work in Malawi
          </p>
          {workplaces.map((w) => (
            <span
              key={w.name}
              className="text-sm font-semibold text-brand-800"
            >
              {w.name}
            </span>
          ))}
        </div>
      </section>

      {/* ————— What is OT? ————— */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <img
              src={pexels(photos.therapyHands, { w: 900, h: 700 })}
              alt="A therapist's hands guiding hand-craft work"
              className="w-full rounded-3xl object-cover shadow-sm"
              loading="lazy"
            />
            <img
              src={pexels(photos.elderlyCare, { w: 500, h: 400 })}
              alt="Caring for an older adult at home"
              className="absolute -right-3 -top-6 hidden w-40 rounded-2xl object-cover shadow-lg ring-4 ring-cream sm:block"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              What is occupational therapy?
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Health through everyday living.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Occupational therapy helps people of all ages do the things they
              need and want to do — dressing, working, learning, playing,
              caring for family — after illness, injury or disability makes it
              hard. It is one of the least visible health professions in
              Malawi, and one of the most needed.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {["Pediatrics", "Mental Health", "Rehabilitation", "Schools", "Community"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800"
                  >
                    {tag}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ————— What we do (Roveia-style numbered cards) ————— */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              What we do
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Four fronts, one profession.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <article
              key={area.n}
              className="group rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <p className="font-display text-sm font-bold text-accent-600">
                {area.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {area.blurb}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ————— 5-year goal banner ————— */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-12 sm:px-10 lg:px-14">
          <img
            src={pexels(photos.doctorStethoscope, { w: 500, h: 500 })}
            alt=""
            aria-hidden
            className="absolute right-0 top-0 hidden h-full w-72 object-cover opacity-30 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
            loading="lazy"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
              Our five-year plan
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Opening an occupational therapy course in Malawi.
            </h2>
            <p className="mt-4 leading-relaxed text-brand-100">
              Today, every Malawian OT trained abroad. OTAM is working towards
              opening a home-grown OT programme — so the profession grows with
              local knowledge, language and purpose.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              Read about the plan →
            </Link>
          </div>
        </div>
      </section>

      {/* ————— Quote (Sphere-style) ————— */}
      <section className="mx-auto max-w-4xl px-4 pb-16 text-center sm:px-6 lg:pb-24">
        <img
          src={pexels(photos.teamMeeting, { w: 120, h: 120 })}
          alt=""
          aria-hidden
          className="mx-auto mb-6 h-12 w-12 rounded-full object-cover ring-2 ring-brand-100"
          loading="lazy"
        />
        <blockquote className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
          "The best measure of recovery is a person back doing what matters to
          them — that is the work of occupational therapy, and the heart of
          OTAM."
        </blockquote>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
          OTAM directorate
        </p>
      </section>

      {/* ————— CTA ————— */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl bg-cream-deep px-6 py-14 text-center sm:px-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Where the next decade of Malawian OT gets built.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Partner with us, support a Malawian student to study OT, or simply
            get in touch — the association would love to hear from you.
          </p>
          <div className="mt-7">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
