# Mandrindra — Portfolio

A bilingual (EN/FR) engineering portfolio built on Next.js 16 (App Router),
implementing the "Midnight Engineering" (dark) / "Aurelian Minimalist" (light)
dual design system, with an interactive WebGL background and a working
contact form.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** — CSS-first theme, dual light/dark token system
- **next-intl** — `/en` and `/fr` routes, translated URLs (`/about` <-> `/a-propos`)
- **next-themes** — system-aware dark/light toggle
- **Raw WebGL** — no extra 3D library; a hand-written shader for the grid/glow background

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — you'll be redirected to `/en` or `/fr` based
on your browser's language.

## Before you ship this

A few things are placeholders on purpose — real values are yours to decide:

1. **Email** — `src/lib/site-config.ts` has `email: "contact@mandrindraa.dev"`.
   Swap it for an inbox you actually check.
2. **Resume** — the "Resume" button in the navbar links to `/resume.pdf`.
   Drop a real PDF at `public/resume.pdf`.
3. **LinkedIn** — left blank in `site-config.ts` until you have a public profile
   to link; add it there and it'll need a small addition to the footer/contact
   sidebar to surface it.
4. **Contact form delivery** — the form is fully wired (validation, pending
   state, success/error states) but won't send real email until you set
   `RESEND_API_KEY` (see `.env.example`). Get a free key at
   resend.com, set it in your environment (or `.env.local` for dev), and
   messages will start arriving at the address in `site-config.ts`. Until
   then, the form shows a graceful fallback pointing people at your mailto
   link — it never pretends to have sent something it didn't.
5. **GitHub repo links** — `src/lib/projects.ts` links `llm2sh` straight to
   `github.com/mandrindraa/llm2sh`. If any repo slug differs from what's
   there, update the `href` field for that project.

## Editing content

- **All copy** (EN + FR) lives in `messages/en.json` and `messages/fr.json`.
  Keys are namespaced by page (`home`, `projects`, `about`, `contact`, etc).
- **Projects** are data-driven from `src/lib/projects.ts` — add a new object
  to the `projects` array and it'll appear on both the home bento grid (if
  listed in `homeProjects`) and the full `/projects` page. Each project uses
  one of six bespoke SVG "glyphs" (`cluster`, `terminal`, `grid`, `tenants`,
  `shield`, `flag`) defined in `src/components/project-glyph.tsx` instead of
  stock photography — pick whichever reads best for a new project, or add a
  new variant.
- **Identity/contact info** is centralized in `src/lib/site-config.ts`.

## Design system notes

- Colors are CSS custom properties in `src/app/globals.css`, split into a
  light (`:root`) and dark (`.dark`) block, then mapped into Tailwind's
  `@theme inline` — so `bg-surface`, `text-on-surface-variant`, etc. work as
  ordinary utility classes and repaint automatically when the theme toggles.
- Shape language shifts with the theme: soft `0.375rem`/`0.5rem` radii in
  Aurelian (light), sharp `0px` corners in Midnight (dark) — see
  `--radius-control` / `--radius-card` in `globals.css`.
- The WebGL background (`src/components/webgl-background.tsx`) reads its
  line/glow colors from the same CSS variables at runtime, so it re-tints
  itself on theme change with no extra wiring.

## Known limitation in this sandbox (not in your environment)

This project was built and verified in a network-restricted sandbox that
can't reach `fonts.googleapis.com`. `npm run build` was confirmed to succeed
there only after temporarily stubbing the two `next/font/google` calls in
`src/app/[locale]/layout.tsx`; the real Google Fonts code is what's shipped
in this file. Your own machine or CI/deploy environment will have normal
internet access, so `next/font/google` will resolve immediately — just run
`npm run build` once after `npm install` to confirm on your end too.

## Deploying

Any Next.js host works (Vercel, or your own DigitalOcean/Dokploy setup, given
the stack you already use elsewhere). Set `RESEND_API_KEY` (and optionally
`RESEND_FROM`) as environment variables on whichever platform you pick.
