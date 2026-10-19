import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { A } from "~/lib/assets";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[1360px] mx-auto flex justify-between items-center z-20 relative"
    >
      <Link to="/" className="flex items-center gap-[14px] group">
        <span className="h-11 w-11 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-lg shadow-black/20">
          <img src={A.logo} alt="OTAM logo" className="h-[82%] w-[82%] object-contain" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-white text-2xl font-medium" style={interTight}>
            OTAM
          </span>
          <span className="hidden sm:inline text-white/50 text-[10px] tracking-[0.22em] uppercase mt-[5px]" style={interTight}>
            Occupational Therapy · Malawi
          </span>
        </span>
      </Link>

      {/* Desktop nav */}
      <motion.nav
        layout
        initial={{ width: 110, opacity: 0 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "width" }}
        className="hidden lg:flex bg-black/40 backdrop-blur-lg rounded-3xl items-center overflow-hidden h-[64px] flex-row-reverse"
      >
        <div className="p-1.5">
          <Link
            to="/contact"
            className="block h-12 px-6 rounded-full bg-white text-black text-xl font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center whitespace-nowrap"
            style={sfPro}
          >
            Get in touch
          </Link>
        </div>
        <div className="flex items-center gap-8 pl-8 pr-2 whitespace-nowrap">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              activeOptions={to === "/" ? { exact: true } : undefined}
              activeProps={{ className: "opacity-100" }}
              className="text-white text-base opacity-70 hover:opacity-100 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <div className="relative lg:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-lg flex items-center justify-center text-white"
        >
          {menuOpen ? (
            <X className="w-5 h-5" strokeWidth={2} />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={2} />
          )}
        </button>
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full right-0 mt-3 w-60 bg-black/70 backdrop-blur-lg rounded-2xl p-4 flex flex-col gap-3"
            >
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  activeOptions={to === "/" ? { exact: true } : undefined}
                  activeProps={{ className: "opacity-100" }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-base opacity-70 hover:opacity-100 transition-opacity"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="h-11 w-full rounded-full bg-white text-black text-lg font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center"
                style={sfPro}
              >
                Get in touch
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
