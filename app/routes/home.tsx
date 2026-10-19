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
  { value: "5-year", label: "plan to open an OT course in Malawi" },
  { value: "2026", label: "first conference in the pipeline" },
];

export default function Home() {
  return (
    <>
      {/* ————— Hero: serif editorial type, staggered rise, zoom collage ————— */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-24">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full bg-cream-deep px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              National professional body · Malawi
            </p>
            <h1 className="rise rise-1 mt-6 font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Helping occupational therapy{" "}
              <em className="font-light italic text-brand-600">
                take root
              </em>{" "}
              in Malawi.
            </h1>
            <p className="text-indent-lede rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              OTAM is a national, independent, voluntary professional body —
              the membership of which is unrestricted by nationality, race,
              creed, colour, politics, gender or social status.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="btn-arrow inline-flex h-12 items-center rounded-full bg-brand-700 px-7 text-sm font-semibold text-cream transition-colors hover:bg-brand-600"
              >
                <span className="dot" aria-hidden />
                Learn about OTAM
                <span aria-hidden className="arr">→</span>
              </Link>
              <Link
                to="/team"
                className="inline-flex h-12 items-center rounded-full border border-ink/20 px-7 text-sm font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700"
              >
                Meet the team
              </Link>
            </div>

            {/* Stat row */}
            <dl className="rise rise-4 mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-brand-700 sm:text-4xl">
                    {s.value}
                  </dd>
                  <dd className="mt-1.5 text-xs font-medium leading-snug text-ink-soft">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Collage */}
          <div className="rise rise-2 relative mx-auto w-full max-w-md hover-zoom lg:max-w-none">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 sm:gap-4">
              <img
                src={pexels(photos.heroChildClinic, { w: 900, h: 1100 })}
                alt="A clinician checking a child at a community clinic"
                className="zoomable col-span-3 row-span-5 rounded-3xl object-cover shadow-sm"
                loading="eager"
              />
              <img
                src={pexels(photos.heroDoctor, { w: 600, h: 640 })}
                alt="A smiling occupational therapist in uniform"
                className="zoomable col-span-2 row-span-3 rounded-3xl object-cover shadow-sm"
                loading="eager"
              />
              <img
                src={pexels(photos.scrabbleTherapy, { w: 600, h: 420 })}
                alt="The word therapy spelled out in letter tiles"
                className="zoomable col-span-2 row-span-2 rounded-3xl object-cover shadow-sm"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 left-4 hidden rounded-2xl bg-cream p-5 shadow-lg ring-1 ring-ink/5 sm:block">
              <p className="font-display text-2xl italic text-brand-700">WFO</p>
              <p className="mt-1 max-w-40 text-xs font-medium leading-snug text-ink-soft">
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
          <p className="font-display text-sm italic text-ink-soft">
            Where OTs work in Malawi
          </p>
          {workplaces.map((w) => (
            <span key={w.name} className="text-sm font-semibold text-brand-700">
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
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Health through{" "}
              <em className="font-normal italic text-brand-600">
                everyday living.
              </em>
            </h2>
            <p className="text-indent-lede mt-5 leading-relaxed text-ink-soft">
              Occupational therapy helps people of all ages do the things they
              need and want to do — dressing, working, learning, playing,
              caring for family — after illness, injury or disability makes it
              hard. One of the least visible health professions in Malawi, and
              one of the most needed.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {["Pediatrics", "Mental Health", "Rehabilitation", "Schools", "Community"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-ink/10 px-4 py-1.5 text-sm font-medium text-ink-soft"
                  >
                    {tag}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ————— What we do: numbered cards ————— */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Four fronts, one profession.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <article
              key={area.n}
              className="group bg-cream p-7 transition-colors hover:bg-cream-deep"
            >
              <p className="font-display text-sm italic text-accent-600">
                {area.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
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
            className="absolute right-0 top-0 hidden h-full w-72 object-cover opacity-25 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
            loading="lazy"
          />
          <div className="relative max-w-2xl">
            <p className="font-display text-sm italic text-accent-400">
              Our five-year plan
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
              An OT course,{" "}
              <em className="font-normal italic text-accent-400">
                built in Malawi.
              </em>
            </h2>
            <p className="text-indent-lede mt-5 leading-relaxed text-brand-200">
              Today, every Malawian OT trained abroad. OTAM is working towards
              opening a home-grown programme — so the profession grows with
              local knowledge, language and purpose.
            </p>
            <Link
              to="/about"
              className="btn-arrow mt-7 inline-flex h-12 items-center rounded-full bg-cream px-7 text-sm font-semibold text-brand-800 transition-colors hover:bg-cream-deep"
            >
              <span className="dot" aria-hidden />
              Read about the plan
              <span aria-hidden className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ————— Quote ————— */}
      <section className="mx-auto max-w-4xl px-4 pb-16 text-center sm:px-6 lg:pb-24">
        <p className="font-display text-2xl font-medium italic leading-snug tracking-tight sm:text-4xl">
          "The best measure of recovery is a person back doing{" "}
          <span className="text-brand-600">what matters to them</span> — that
          is the work of occupational therapy, and the heart of OTAM."
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          OTAM directorate
        </p>
      </section>

      {/* ————— CTA ————— */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl bg-cream-deep px-6 py-14 text-center sm:px-10 lg:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Where the next decade of Malawian OT gets{" "}
            <em className="font-normal italic text-brand-600">built.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-soft">
            Partner with us, support a Malawian student to study OT, or simply
            get in touch — the association would love to hear from you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-arrow inline-flex h-12 items-center rounded-full bg-brand-700 px-8 text-sm font-semibold text-cream transition-colors hover:bg-brand-600"
            >
              <span className="dot" aria-hidden />
              Get in touch
              <span aria-hidden className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
