import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { A } from "~/lib/assets";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

/* Origin for the circular reveal — roughly where the trigger button sits
   (top-right corner of the header) so the menu grows out of the button. */
const REVEAL_AT = "circle(0% at calc(100% - 44px) 46px)";
const REVEAL_FULL = "circle(150% at calc(100% - 44px) 46px)";

const overlayVariants = {
  hidden: { opacity: 0.4, clipPath: REVEAL_AT },
  show: {
    opacity: 1,
    clipPath: REVEAL_FULL,
    transition: { duration: 0.55, ease: [0.77, 0, 0.175, 1] },
  },
  exit: {
    opacity: 0.4,
    clipPath: REVEAL_AT,
    transition: { duration: 0.4, ease: [0.77, 0, 0.175, 1] },
  },
} as const;

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 18, transition: { duration: 0.2 } },
} as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Lock page scroll while the full-screen menu is open. */
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close on Escape. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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

      {/* Mobile trigger — icon morphs and rotates between menu and close */}
      <motion.button
        layout
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        whileTap={{ scale: 0.88 }}
        className="relative z-[60] lg:hidden w-12 h-12 rounded-full bg-black/40 backdrop-blur-lg flex items-center justify-center text-white transition-colors duration-300"
        style={menuOpen ? { backgroundColor: "rgba(240,180,41,0.9)", color: "#101B14" } : undefined}
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <X className="w-5 h-5" strokeWidth={2.25} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <Menu className="w-5 h-5" strokeWidth={2} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile menu — full-screen, reveals as a circle expanding from the button */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#101B14]/[0.98] backdrop-blur-2xl overflow-hidden"
            style={{ willChange: "clip-path, opacity" }}
          >
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-1 flex flex-col justify-center px-8 pt-24"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.div key={label} variants={itemVariants} className="flex items-baseline gap-4 border-b border-white/10 last:border-b-0">
                  <span
                    className="text-[#F0B429] text-xs tracking-[0.2em] w-7 shrink-0 font-medium"
                    style={interTight}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    to={to}
                    activeOptions={to === "/" ? { exact: true } : undefined}
                    activeProps={{ className: "text-[#F0B429]" }}
                    onClick={() => setMenuOpen(false)}
                    className="group py-4 flex items-center justify-between w-full text-white text-[34px] leading-none opacity-95 hover:opacity-100 hover:text-[#F0B429] transition-colors duration-200"
                    style={interTight}
                  >
                    {label}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="px-8 pb-10 flex flex-col gap-4"
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-press h-14 w-full rounded-full bg-white text-black text-lg font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center"
                style={sfPro}
              >
                Get in touch
              </Link>
              <p
                className="text-center text-white/40 text-[10px] tracking-[0.22em] uppercase"
                style={interTight}
              >
                Occupational Therapy · Malawi
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
