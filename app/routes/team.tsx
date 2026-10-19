import type { Route } from "./+types/team";
import { board } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team — OTAM" },
    {
      name: "description",
      content: "Meet the OTAM board and the occupational therapists serving across Malawi.",
    },
  ];
}

/** Placeholder profile slots — exec can fill these in later. */
const otsInMalawi = [
  { role: "Pediatrics · Private clinic", city: "Blantyre", initials: "PM" },
  { role: "Rehabilitation · Inpatient", city: "Blantyre", initials: "RM" },
  { role: "Community based rehabilitation", city: "Nationwide", initials: "LT" },
];

export default function Team() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-ink/5 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Our team
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The people leading OTAM.
          </h1>
          <p className="text-indent-lede mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            A volunteer board serving Malawi's occupational therapy community —
            reachable directly, happy to talk.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          OTAM Board
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {board.map((person) => (
            <article
              key={person.name}
              className="rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                {/* Monogram avatar — real portraits to be added by exec */}
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl font-display text-xl font-semibold text-white ${person.tint}`}
                >
                  {person.initials}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-600">
                    {person.role}
                  </p>
                </div>
              </div>
              <dl className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-sm">
                <div className="flex gap-2">
                  <dt className="w-16 shrink-0 font-medium text-ink-soft">
                    Email
                  </dt>
                  <dd className="font-medium">
                    <a
                      href={`mailto:${person.email}`}
                      className="underline decoration-brand-300 decoration-2 underline-offset-2 transition hover:text-brand-700"
                    >
                      {person.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-16 shrink-0 font-medium text-ink-soft">
                    Phone
                  </dt>
                  <dd className="font-medium">{person.phone}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* OTs in Malawi */}
      <section className="border-y border-ink/10 bg-brand-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
                The community
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                OTs in Malawi
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-brand-100">
                Approximately ten occupational therapists are working in
                different services, roles and organisations across Malawi.
                Member profiles will be published here as the registry comes
                online.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {otsInMalawi.map((o) => (
              <article
                key={o.initials}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 font-display text-lg font-semibold text-white/80">
                  {o.initials}
                </span>
                <h3 className="mt-4 font-semibold text-white">
                  Profile coming soon
                </h3>
                <p className="mt-1 text-sm text-brand-100/80">{o.role}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-accent-400">
                  {o.city}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Small note */}
      <section className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <p className="mx-auto max-w-2xl text-ink-soft">
          Are you an occupational therapist working in Malawi? We would love to
          include you in the registry and future member directory.
        </p>
      </section>
    </>
  );
}
