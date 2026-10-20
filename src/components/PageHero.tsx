import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { SiteHeader } from "~/components/SiteHeader";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;

/**
 * Shared hero band for inner pages (About, Team, Contact).
 * Dark photographic backdrop with a serif-italic headline accent.
 */
export function PageHero({
  kicker,
  titleLine1,
  titleAccent,
  titleLine2,
  sub,
  image,
  children,
}: {
  kicker: string;
  titleLine1: string;
  titleAccent: string;
  titleLine2?: string;
  sub: string;
  image: string;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[62vh] w-full text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#101B14]">
      {/* backdrop opens like a window on load — image settles from a slight zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        initial={reduce ? undefined : { clipPath: "inset(0 0 100% 0)", scale: 1.15 }}
        animate={reduce ? undefined : { clipPath: "inset(0 0 0 0)", scale: 1 }}
        transition={{
          clipPath: { duration: 1.0, ease: [0.77, 0, 0.175, 1] },
          scale: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

      <SiteHeader />

      <div className="w-full max-w-[900px] mx-auto flex flex-col items-start gap-7 my-auto pt-14 pb-10 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="h-9 px-5 rounded-full border border-white/40 text-white/80 text-sm flex items-center tracking-[0.14em] uppercase"
          style={interTight}
        >
          {kicker}
        </motion.span>
        <h1
          className="text-white text-[40px] sm:text-[52px] md:text-[64px] font-normal leading-[1.08] md:leading-[1.04]"
          style={interTight}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {titleLine1}
          </motion.span>
          <motion.span
            className="block text-[#F0B429]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <span className="italic" style={playfair}>
              {titleAccent}
            </span>
            {titleLine2 ? ` ${titleLine2}` : ""}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-[640px] text-white/75 text-lg md:text-xl leading-relaxed"
          style={sfPro}
        >
          {sub}
        </motion.p>
      </div>

      {children}
    </section>
  );
}
