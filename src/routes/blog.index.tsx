import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { RevealImage } from "~/components/RevealImage";
import { FEATURED_POST, GRID_POSTS, type Post } from "~/lib/blog";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — OTAM" },
      {
        name: "description",
        content:
          "Stories, field notes and updates from the occupational therapy community in Malawi — the OTAM journal.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <BlogHero />
      <FeaturedStory post={FEATURED_POST} />
      <LatestGrid posts={GRID_POSTS} />
      <UpdatesBand />
      <SiteFooter />
    </main>
  );
}

/* ———————————————————————— Hero ———————————————————————— */

function BlogHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[64vh] w-full text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#101B14]">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FEATURED_POST.image})` }}
        initial={reduce ? undefined : { clipPath: "inset(0 0 100% 0)", scale: 1.15 }}
        animate={reduce ? undefined : { clipPath: "inset(0 0 0 0)", scale: 1 }}
        transition={{
          clipPath: { duration: 1.0, ease: [0.77, 0, 0.175, 1] },
          scale: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/60 to-black/85" />

      {/* the subtle dotted texture, rising out of the gloom behind the title */}
      <div className="absolute inset-x-0 top-0 h-1/2 dot-dark dot-fade-top opacity-70" aria-hidden />

      <SiteHeader />

      <div className="w-full max-w-[900px] mx-auto flex flex-col items-start gap-7 my-auto pt-14 pb-10 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="h-9 px-5 rounded-full border border-white/40 text-white/80 text-sm flex items-center tracking-[0.14em] uppercase"
          style={interTight}
        >
          The OTAM Journal
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
            Stories &amp;{" "}
            <span className="italic text-[#F0B429]" style={playfair}>
              field notes
            </span>
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            from Malawi's OT community
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-[640px] text-white/75 text-lg md:text-xl leading-relaxed"
          style={sfPro}
        >
          What the association is building, what practitioners are learning in
          wards, schools and villages — and where the profession is heading
          next.
        </motion.p>
      </div>
    </section>
  );
}

/* ———————————————————————— Featured story ———————————————————————— */

function FeaturedStory({ post }: { post: Post }) {
  return (
    <section className="bg-[#F6F4EE] relative overflow-hidden">
      {/* faint texture on the featured band too — quieter, since the band is light */}
      <div
        className="absolute inset-x-0 bottom-0 h-[420px] dot-light dot-fade-bottom opacity-60"
        aria-hidden
      />
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] focus-visible:rounded-3xl"
          >
            <RevealImage
              src={post.image}
              alt={post.imageAlt}
              className="h-[340px] md:h-[440px] rounded-[28px]"
              duration={1.0}
              hover
              imgClassName="img-hover-zoom group-hover:saturate-[1.08]"
              overlay={
                <span
                  className="absolute top-4 left-4 h-8 px-4 rounded-full bg-black/45 backdrop-blur-md text-white text-sm flex items-center transition-colors duration-300 group-hover:bg-[#F0B429] group-hover:text-[#15221B] group-hover:shadow-[0_4px_16px_rgba(240,180,41,0.35)]"
                  style={interTight}
                >
                  Featured
                </span>
              }
            />
            <div className="flex flex-col gap-5">
              <PostMeta post={post} />
              <h2
                className="text-3xl md:text-[40px] leading-[1.15] text-[#15221B] transition-colors duration-300 group-hover:text-[#2E7D5B]"
                style={interTight}
              >
                {post.title}
              </h2>
              <p
                className="text-lg leading-relaxed text-[#15221B]/65"
                style={sfPro}
              >
                {post.dek}
              </p>
              <span
                className="btn-press mt-2 w-fit h-12 px-6 bg-[#15221B] text-white rounded-2xl inline-flex items-center gap-2 text-lg font-medium hover:bg-[#1f3327]"
                style={sfPro}
              >
                Read the story
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ———————————————————————— Latest grid ———————————————————————— */

function LatestGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-white border-y border-black/5">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2
            className="text-4xl md:text-5xl leading-[1.15] text-[#15221B] max-w-[560px]"
            style={interTight}
          >
            The{" "}
            <span className="italic" style={playfair}>
              latest
            </span>{" "}
            from the journal
          </h2>
          <p className="text-lg text-[#15221B]/60 max-w-[380px]" style={sfPro}>
            New writing as it happens — conference news, education updates and
            notes from practice.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.55, ease: "easeOut" }}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group flex flex-col gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] focus-visible:rounded-3xl"
      >
        <RevealImage
          src={post.image}
          alt={post.imageAlt}
          className="h-[240px] rounded-3xl"
          duration={0.9}
          delay={(index % 3) * 0.07}
          hover
          imgClassName="img-hover-zoom group-hover:saturate-[1.08]"
          overlay={
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
          }
        />
        <div className="flex flex-col gap-2 px-1 pb-2">
          <PostMeta post={post} />
          <h3
            className="text-2xl leading-snug text-[#15221B] flex items-start justify-between gap-3 transition-colors duration-300 group-hover:text-[#2E7D5B]"
            style={interTight}
          >
            {post.title}
            <ArrowUpRight
              className="w-5 h-5 mt-1 shrink-0 text-[#15221B]/25 transition-all duration-300 group-hover:text-[#F0B429] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </h3>
          <p
            className="text-[#15221B]/60 text-base leading-relaxed"
            style={sfPro}
          >
            {post.dek}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ———————————————————————— Shared bits ———————————————————————— */

function PostMeta({ post }: { post: Post }) {
  return (
    <div
      className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
      style={sfPro}
    >
      <span className="inline-flex items-center gap-2 text-[#15221B]/70">
        <span className="w-2 h-2 rounded-full bg-[#F0B429]" aria-hidden />
        {post.tag}
      </span>
      <span className="text-[#15221B]/35" aria-hidden>
        ·
      </span>
      <span className="text-[#15221B]/50">{post.date}</span>
      <span className="text-[#15221B]/35" aria-hidden>
        ·
      </span>
      <span className="text-[#15221B]/50">{post.readTime}</span>
    </div>
  );
}

/* ———————————————————————— Updates band ———————————————————————— */

function UpdatesBand() {
  return (
    <section className="bg-[#15221B] text-white relative overflow-hidden">
      {/* texture melts in from the top, echoing the hero */}
      <div
        className="absolute inset-x-0 top-0 h-2/3 dot-dark dot-fade-top opacity-60"
        aria-hidden
      />
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl leading-[1.15] max-w-[720px]"
          style={interTight}
        >
          Want the next story{" "}
          <span className="italic text-[#F0B429]" style={playfair}>
            first?
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a
            href="mailto:otammalawi@gmail.com?subject=Please%20add%20me%20to%20OTAM%20journal%20updates"
            className="btn-press h-14 px-8 bg-white text-[#15221B] rounded-2xl inline-flex items-center gap-3 text-xl font-medium hover:bg-neutral-100 shadow-lg whitespace-nowrap"
            style={sfPro}
          >
            <Mail className="w-5 h-5" />
            Get updates by email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
