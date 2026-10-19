import { Link } from "react-router";
import { board, site } from "~/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/otam-logo.jpg"
                alt="OTAM logo"
                className="h-12 w-12 rounded-full bg-cream p-0.5 object-contain"
              />
              <span className="font-display text-xl font-semibold tracking-tight text-cream">
                {site.longName}
              </span>
            </div>
            <p className="text-indent-lede mt-4 max-w-sm text-sm leading-relaxed">
              A national, independent, voluntary professional body,
              representing occupational therapists across Malawi since 2014.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="dot-link w-fit transition hover:text-cream">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="dot-link w-fit transition hover:text-cream">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="dot-link w-fit transition hover:text-cream">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="dot-link w-fit transition hover:text-cream">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/40">
              Let's Talk
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="dot-link w-fit transition hover:text-cream"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-cream/50">
                {board[0].name} —{" "}
                <span className="text-cream/70">{board[0].phone}</span>
              </li>
              <li className="text-cream/50">
                {board[1].name} —{" "}
                <span className="text-cream/70">{board[1].phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.longName}. All rights reserved.</p>
          <p className="font-display italic tracking-wide">
            Built with care for the OT community in Malawi
          </p>
        </div>
      </div>
    </footer>
  );
}
