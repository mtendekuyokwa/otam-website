# OTAM — Occupational Therapy Association of Malawi

Marketing website for **OTAM**, the national, independent, voluntary
professional body for occupational therapists in Malawi. Pages: Home,
About, Team and Contact (static content for now — no external links,
forms are UI-only).

Built with TanStack Start v1, React 19, TypeScript, Tailwind CSS v4,
framer-motion and lucide-react.

## Structure

| Path                            | Purpose                                                    |
| ------------------------------- | ---------------------------------------------------------- |
| `src/routes/index.tsx`          | Home — hero, affiliates strip, mission strip, where OTs work |
| `src/routes/about.tsx`          | About — story, vision/mission, values, objectives          |
| `src/routes/team.tsx`           | Team — executive committee, sub-committees, membership     |
| `src/routes/contact.tsx`        | Contact — details + inquiry form (UI only)                 |
| `src/routes/__root.tsx`         | Root document shell (head, meta, fonts, styles)            |
| `src/components/SiteHeader.tsx` | Shared nav (desktop pill nav + mobile menu)                |
| `src/components/PageHero.tsx`   | Shared hero band for inner pages                           |
| `src/components/RevealImage.tsx` | Reveal-window image effect (clip-path + settle zoom)       |
| `src/components/SiteFooter.tsx` | Shared footer                                              |
| `src/lib/assets.ts`             | Image map `A` — photography hotlinked from pexels.com      |
| `public/otam.svg`               | OTAM rising-sun mark (logo/favicon)                        |
| `src/styles.css`                | Tailwind v4 entry                                          |

## Getting started

```bash
npm install
npm run dev      # develop (http://localhost:3000)
npm run build    # typecheck + production build to .output
npm run start    # serve the production build (node .output/server/index.mjs)
```

Notes:

- Fonts (Inter Tight, Playfair Display) load from Google Fonts; photos load
  from `images.pexels.com` — the site needs a network connection for imagery.
- Team portraits in `src/lib/assets.ts` are stock placeholders to be replaced
  with real committee photos.
