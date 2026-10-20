import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { RevealImage } from "~/components/RevealImage";
import { getPost, getRelated, type Post } from "~/lib/blog";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

/**
 * Typed independently of the route's own generics: referencing `ctx.params`
 * inline inside `head` breaks the route's callback inference (the context type
 * is variance-circular), so this callback announces its own minimal shape.
 */
type HeadCtx = {
  params: { slug: string };
};

const articleShader: (ctx: HeadCtx) => {
  meta: ({ title: string } | { name: string; content: string })[];
} = (ctx) => {
  const post = getPost(ctx.params.slug);
  return {
    meta: [
      { title: post ? `${post.title} — OTAM Blog` : "OTAM Blog" },
      {
        name: "description",
        content:
          post?.dek ??
          "The OTAM journal — stories from Malawi's occupational therapy community.",
      },
    ],
  };
};

export const Route = createFileRoute("/blog/$slug")({
  head: articleShader,
  beforeLoad: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  component: PostPage,
});

function PostPage() {
  const post = getPost(Route.useParams().slug);
  if (!post) throw notFound();
  const related = getRelated(post.slug);

  return (
    <main>
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <RelatedStories related={related} />
      <SiteFooter />
    </main>
  );
}

/* ———————————————————————— Article hero ———————————————————————— */

function ArticleHero({ post }: { post: Post }) {
  return (
    <section className="relative min-h-[58vh] w-full text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#101B14]">
      {/* ghosted version of the story's photo — atmosphere, not focal point */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 blur-[2px]"
        style={{ backgroundImage: `url(${post.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-[#101B14]" />

      {/* the signature dotted texture — subtle, rising behind the title */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 dot-dark dot-fade-top opacity-70"
        aria-hidden
      />

      <SiteHeader />

      <div className="w-full max-w-[820px] mx-auto flex flex-col items-start gap-6 my-auto pt-14 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 h-10 px-4 rounded-full border border-white/30 text-white/75 text-sm hover:bg-white/10 hover:text-white transition-colors"
            style={sfPro}
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All stories
          </Link>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="h-9 px-5 rounded-full bg-[#F0B429] text-[#15221B] text-sm flex items-center tracking-[0.12em] uppercase font-medium"
          style={interTight}
        >
          {post.tag}
        </motion.span>

        <h1
          className="text-white text-[36px] sm:text-[48px] md:text-[58px] font-normal leading-[1.1]"
          style={interTight}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            dangerouslySetInnerHTML={{ __html: accentize(post.title) }}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/60 text-base"
          style={sfPro}
        >
          <span>{post.date}</span>
          <span className="text-white/30" aria-hidden>·</span>
          <span>{post.readTime}</span>
          <span className="text-white/30" aria-hidden>·</span>
          <span>OTAM</span>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Italicise the last phrase of the headline in Playfair — the accent treatment
 * every OTAM headline uses, applied to article titles automatically.
 */
function accentize(title: string) {
  const words = title.trim().split(" ");
  if (words.length < 4) return escapeHtml(title);
  const cut = Math.max(words.length - 4, Math.ceil(words.length / 2));
  const head = escapeHtml(words.slice(0, cut).join(" "));
  const tail = escapeHtml(words.slice(cut).join(" "));
  return `${head} <em style="font-family:'Playfair Display',serif;color:#F0B429;">${tail}</em>`;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* ———————————————————————— Article body ———————————————————————— */

function ArticleBody({ post }: { post: Post }) {
  return (
    <section className="bg-[#F6F4EE]">
      {/* the photo leans into the light band from the dark hero above */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative">
        <RevealImage
          src={post.image}
          alt={post.imageAlt}
          className="relative z-10 -mt-14 md:-mt-24 h-[320px] md:h-[480px] rounded-[28px] shadow-2xl shadow-black/25"
          duration={1.0}
          eager
        />
      </div>

      <article className="max-w-[760px] mx-auto px-6 pt-16 md:pt-24 pb-24">
        {/* lede */}
        <div className="flex flex-col gap-6">
          {post.intro.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={
                i === 0
                  ? "text-xl md:text-2xl leading-[1.5] text-[#15221B]"
                  : "text-lg leading-relaxed text-[#15221B]/70"
              }
              style={sfPro}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* pull quote — gold rule + Playfair, the OTAM "sunrise" motif */}
        {post.quote ? (
          <motion.figure
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="my-14 md:my-20 pl-6 md:pl-8 border-l-[3px] border-[#F0B429] flex flex-col gap-3"
          >
            <Quote className="w-6 h-6 text-[#F0B429]/70" aria-hidden />
            <blockquote
              className="text-2xl md:text-3xl leading-[1.35] text-[#15221B]"
              style={playfair}
            >
              {post.quote.text}
            </blockquote>
            <figcaption
              className="text-[#15221B]/50 text-sm tracking-[0.14em] uppercase"
              style={interTight}
            >
              — {post.quote.cite}
            </figcaption>
          </motion.figure>
        ) : null}

        {/* sections */}
        <div className="flex flex-col gap-12">
          {post.sections.map((section) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5"
            >
              <h2
                className="text-2xl md:text-[28px] leading-snug text-[#15221B] flex items-center gap-3"
                style={interTight}
              >
                <span className="w-6 h-[3px] rounded-full bg-[#F0B429] shrink-0" aria-hidden />
                {section.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-[#15221B]/70"
                    style={sfPro}
                  >
                    {para}
                  </p>
                ))}
              </div>
              {section.list?.length ? (
                <ul className="flex flex-col gap-3 mt-1">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="bg-white rounded-2xl px-5 py-4 text-lg leading-relaxed text-[#15221B]/70 flex items-start gap-3"
                      style={sfPro}
                    >
                      <ArrowUpRight
                        className="w-4.5 h-4.5 mt-1 text-[#2E7D5B] shrink-0"
                        aria-hidden
                      />
                      <span>
                        {item.lead ? (
                          <strong
                            className="text-[#15221B] font-medium"
                            style={interTight}
                          >
                            {item.lead}{" "}
                          </strong>
                        ) : null}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.section>
          ))}
        </div>

        {/* sign-off hairline, like the end of a printed journal piece */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <span className="w-16 h-px bg-[#15221B]/20" aria-hidden />
          <span
            className="text-[#15221B]/45 text-sm tracking-[0.2em] uppercase text-center"
            style={interTight}
          >
            Do · Be · Belong — OTAM
          </span>
          <Link
            to="/blog"
            className="btn-press mt-2 h-12 px-6 border border-black/15 text-[#15221B] rounded-2xl inline-flex items-center gap-2 text-lg font-medium hover:bg-white transition-colors"
            style={sfPro}
          >
            <ArrowLeft className="w-4.5 h-4.5" />
            Back to all stories
          </Link>
        </div>
      </article>
    </section>
  );
}

/* ———————————————————————— Related stories ———————————————————————— */

function RelatedStories({ related }: { related: Post[] }) {
  return (
    <section className="bg-white border-t border-black/5 relative overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-full dot-light dot-fade-bottom opacity-50"
        aria-hidden
      />
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2
            className="text-4xl md:text-5xl leading-[1.15] text-[#15221B] max-w-[560px]"
            style={interTight}
          >
            Keep{" "}
            <span className="italic" style={playfair}>
              reading
            </span>
          </h2>
          <Link
            to="/blog"
            className="btn-press h-12 px-6 border border-black/15 text-[#15221B] rounded-2xl inline-flex items-center gap-2 text-lg font-medium hover:bg-[#F6F4EE] transition-colors"
            style={sfPro}
          >
            All stories
            <ArrowUpRight className="w-4.5 h-4.5" />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post, i) => (
            <RelatedCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group flex flex-col gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] focus-visible:rounded-3xl"
      >
        <RevealImage
          src={post.image}
          alt={post.imageAlt}
          className="h-[220px] rounded-3xl"
          duration={0.9}
          delay={index * 0.07}
          hover
          imgClassName="img-hover-zoom group-hover:saturate-[1.08]"
          overlay={
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
          }
        />
        <div className="flex flex-col gap-2 px-1">
          <span className="inline-flex items-center gap-2 text-sm text-[#15221B]/60" style={sfPro}>
            <span className="w-2 h-2 rounded-full bg-[#F0B429]" aria-hidden />
            {post.tag}
          </span>
          <h3
            className="text-xl leading-snug text-[#15221B] flex items-start justify-between gap-3 transition-colors duration-300 group-hover:text-[#2E7D5B]"
            style={interTight}
          >
            {post.title}
            <ArrowUpRight
              className="w-5 h-5 mt-1 shrink-0 text-[#15221B]/25 transition-all duration-300 group-hover:text-[#F0B429] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </h3>
          <p className="text-[#15221B]/60 text-base leading-relaxed" style={sfPro}>
            {post.dek}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
