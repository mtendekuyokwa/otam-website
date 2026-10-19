import { useState } from "react";
import { Link, NavLink } from "react-router";
import { navLinks } from "~/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement strip */}
      <div className="bg-ink px-4 py-2 text-center text-xs font-medium tracking-wide text-cream-deep/90">
        Conference 2026 · tracks, workshops &amp; abstracts — details from the
        association soon
      </div>

      <div className="border-b border-ink/5 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo — the original OTAM mark */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/otam-logo.jpg"
              alt="OTAM logo"
              className="h-11 w-11 rounded-full bg-white object-contain ring-1 ring-ink/10"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight">
                OTAM
              </span>
              <span className="hidden font-display text-[10px] italic text-ink-soft sm:block">
                Occupational Therapy · Malawi
              </span>
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  [
                    "dot-link rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-700"
                      : "text-ink-soft hover:text-ink",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <span data-active={isActive ? "true" : undefined}>
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA (desktop) — Mejuma pill with arrow */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-arrow inline-flex h-11 items-center rounded-full bg-brand-700 px-6 text-sm font-semibold text-cream transition-colors hover:bg-brand-600"
            >
              <span className="dot" aria-hidden />
              Get in Touch
              <span aria-hidden className="arr">→</span>
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-cream-deep md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-ink transition-transform duration-300 [transition-timing-function:cubic-bezier(0.625,0.05,0,1)] ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-ink transition-transform duration-300 [transition-timing-function:cubic-bezier(0.625,0.05,0,1)] ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="border-t border-ink/5 px-4 py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "dot-link rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-cream-deep text-brand-700"
                        : "text-ink-soft hover:bg-cream-deep hover:text-ink",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 font-semibold text-cream"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
