import { Link } from "react-router";
import { board, site } from "~/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-display text-sm font-extrabold text-white">
                OT
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.longName} — a national, independent, voluntary professional
              body, representing occupational therapists across Malawi since
              2014.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Let's Talk
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-white/50">
                {board[0].name} —{" "}
                <span className="text-white/70">{board[0].phone}</span>
              </li>
              <li className="text-white/50">
                {board[1].name} —{" "}
                <span className="text-white/70">{board[1].phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.longName}. All rights reserved.</p>
          <p className="tracking-wide">
            Built with care for the OT community in Malawi
          </p>
        </div>
      </div>
    </footer>
  );
}
