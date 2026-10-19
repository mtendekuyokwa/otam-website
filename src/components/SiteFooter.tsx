import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { A } from "~/lib/assets";
import { NAV_LINKS } from "~/components/SiteHeader";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#15221B] text-white">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16 md:py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        {/* Brand */}
        <div className="flex flex-col gap-5 max-w-sm">
          <div className="flex items-center gap-3">
            <img src={A.logo} alt="OTAM logo" className="h-11 w-11" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-medium" style={interTight}>
                OTAM
              </span>
              <span className="text-white/40 text-[10px] tracking-[0.22em] uppercase mt-[5px]" style={interTight}>
                Occupational Therapy · Malawi
              </span>
            </div>
          </div>
          <p className="text-white/50 text-base leading-relaxed" style={sfPro}>
            The national, independent, voluntary professional body for
            occupational therapists in Malawi — promoting meaningful
            participation, independence, social inclusion and wellbeing for
            all people in Malawi.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-4">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase" style={interTight}>
            Explore
          </span>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                activeOptions={to === "/" ? { exact: true } : undefined}
                className="text-white/70 hover:text-white text-base transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase" style={interTight}>
            Contact
          </span>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-1 text-[#E88A63] shrink-0" />
            <p className="text-white/70 text-base leading-relaxed" style={sfPro}>
              P.O. Box 2, Thondwe,
              <br />
              Zomba, Malawi
            </p>
          </div>
          <p className="text-white/70 text-base" style={sfPro}>
            otammalawi@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-white/35 text-sm" style={sfPro}>
          <span>© {new Date().getFullYear()} Occupational Therapy Association of Malawi</span>
          <span>Do · Be · Belong</span>
        </div>
      </div>
    </footer>
  );
}
