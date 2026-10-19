import type { Route } from "./+types/contact";
import { board, site } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — OTAM" },
    {
      name: "description",
      content: "Get in touch with the Occupational Therapy Association of Malawi.",
    },
  ];
}

export default function Contact() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-ink/5 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Reach us directly — we read everything.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Partnerships, press, students studying OT abroad, OTs returning
            home — the association wants to hear it all.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Cards */}
          <div>
            <article className="rounded-3xl bg-brand-800 p-7 text-white shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
                General enquiries
              </h2>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight break-all">
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-accent-400/60 decoration-2 underline-offset-4 transition hover:decoration-accent-400"
                >
                  {site.email}
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/90">
                For everything partnerships, press and general questions.
              </p>
            </article>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {board.map((person) => (
                <article
                  key={person.name}
                  className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl font-display text-sm font-extrabold text-white ${person.tint}`}
                    >
                      {person.initials}
                    </span>
                    <div>
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-1.5 border-t border-ink/10 pt-4 text-sm">
                    <p>
                      <a
                        href={`mailto:${person.email}`}
                        className="break-all transition hover:text-brand-700"
                      >
                        {person.email}
                      </a>
                    </p>
                    <p className="text-ink-soft">{person.phone}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 rounded-2xl bg-cream-deep p-5 text-sm leading-relaxed text-ink-soft">
              OTAM serves members across Malawi, headquartered in Blantyre with
              friendly reach in Lilongwe. Regional branches follow once
              membership grows past 30 members.
            </p>
          </div>

          {/* Form (UI only for now) */}
          <div>
            <form
              className="rounded-3xl border border-ink/10 bg-white p-7 shadow-sm sm:p-9"
              action="#"
            >
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Send the association a message
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Fill in the form and it will reach the OTAM inbox. (Delivery
                wiring comes with the full launch.)
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-medium">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-medium">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message…"
                    className="w-full resize-y rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:w-auto sm:px-10"
              >
                Send message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
