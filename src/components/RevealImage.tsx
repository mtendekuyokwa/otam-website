import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

/** Matches the tokens in src/styles.css */
const EASE_EXPRESS = [0.22, 1, 0.36, 1] as const;
const EASE_GLIDE = [0.77, 0, 0.175, 1] as const;

/** Max parallax shift inside the window, in px */
const PARALLAX = 9;

let fineHover: boolean | null = null;
/** Decorative mouse-tracking only runs for real pointers (never touch) */
function canFineHover() {
  if (fineHover === null && typeof window !== "undefined") {
    fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }
  return fineHover ?? false;
}

/**
 * Reveal-window effect: the frame opens like a window (clip-path wipes up)
 * while the image inside settles from a slight zoom to rest.
 *
 * With `hover`, the window comes alive on hover — cursor parallax inside the
 * frame (springs, so it retargets naturally and glides back on leave), a
 * rising-sun wash and a gold hairline frame. All transform/opacity.
 * Respects prefers-reduced-motion (opacity fade only, no movement).
 */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  overlay,
  duration = 0.9,
  delay = 0,
  eager = false,
  hover = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  overlay?: ReactNode;
  /** seconds — the clip reveal */
  duration?: number;
  delay?: number;
  eager?: boolean;
  hover?: boolean;
}) {
  const reduce = useReducedMotion();
  const loading = eager ? "eager" : "lazy";

  /* ————— living-window hover (fine pointers only, never reduced-motion) ————— */
  const parallaxOn = hover && !reduce && canFineHover();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springConfig = { stiffness: 130, damping: 18, mass: 0.35 };
  const sx = useSpring(mx, springConfig);
  const sy = useSpring(my, springConfig);
  const parallaxTransform = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!parallaxOn) return;
    const r = e.currentTarget.getBoundingClientRect();
    // image leans away from the cursor — like shifting your head at a window
    mx.set(((e.clientX - r.left) / r.width - 0.5) * PARALLAX * -2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * PARALLAX * -2);
  }
  function handleMouseLeave() {
    if (!parallaxOn) return;
    mx.set(0);
    my.set(0);
  }

  if (reduce) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          className={`h-full w-full object-cover ${imgClassName}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: EASE_EXPRESS, delay }}
        />
        {overlay}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={parallaxOn ? handleMouseMove : undefined}
      onMouseLeave={parallaxOn ? handleMouseLeave : undefined}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, ease: EASE_GLIDE, delay }}
    >
      {/* settle zoom layer (entrance only) */}
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: duration + 0.15, ease: EASE_EXPRESS, delay }}
      >
        {/* cursor parallax layer (springs retarget mid-flight and glide home on leave) */}
        <motion.div
          className={`h-full w-full ${parallaxOn ? "will-change-transform" : ""}`}
          style={parallaxOn ? { transform: parallaxTransform } : undefined}
        >
          <img
            src={src}
            alt={alt}
            loading={loading}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        </motion.div>
      </motion.div>

      {hover ? (
        <>
          <span className="img-wash pointer-events-none absolute inset-0" aria-hidden />
          <span className="img-frame pointer-events-none absolute inset-2" aria-hidden />
        </>
      ) : null}

      {overlay}
    </motion.div>
  );
}
