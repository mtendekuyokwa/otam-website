import { useState } from "react";
import { Link, NavLink } from "react-router";
import { navLinks, site } from "~/data/site";

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-brand-800 text-white"
      : "text-ink-soft hover:bg-brand-50 hover:text-brand-800",
  ].join(" ");

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement strip (Roveia-style top bar) */}
      <div className="bg-brand-900 px-4 py-2 text-center text-xs font-medium tracking-wide text-brand-100">
        Conference 2026 · tracks, workshops &amp; abstracts — full details from
        the association soon
      </div>

      <div className="border-b border-ink/5 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-700 font-display text-sm font-extrabold text-white">
              OT
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-extrabold tracking-tight">
                {site.name}
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-ink-soft sm:block">
                Occupational Therapy · Malawi
              </span>
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} end>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get in Touch
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-ink transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-ink transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="border-t border-ink/5 bg-cream px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-4 py-3 text-base font-medium",
                      isActive
                        ? "bg-brand-800 text-white"
                        : "text-ink-soft hover:bg-brand-50",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-brand-700 px-4 py-3 text-center text-base font-semibold text-white"
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
