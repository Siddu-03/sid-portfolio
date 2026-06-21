# Siddeshwarprasad K R — Portfolio

A premium, editorial personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and Lenis smooth scroll. Fully configuration-driven — content and site behavior live in `src/data/`, not inside components.

## Stack

- **React 19 + Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** — design tokens (color, type scale, spacing) live in `src/index.css` under `@theme`
- **Framer Motion** — all motion variants centralized in `src/lib/motion.js`
- **Lenis** — smooth scroll, automatically disabled when the user has `prefers-reduced-motion` set
- **React Router** — client-side routing across Home, About, Projects, Project Detail, Photography, Contact, 404

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # eslint
```

## Configuration files (`src/data/`)

This is the layer almost every future update should touch — components read from these, not the other way around.

| File | Controls |
|---|---|
| `profile.js` | Name, title, location, tagline/description lines, hero image + alt text, email, resume path, interests list, social links |
| `navigation.js` | Nav labels, routes, and which siteConfig flag (if any) gates each item |
| `siteConfig.js` | Site name, default theme, and feature flags (`enablePhotography`, `enableThemeToggle`, `enableHeroParallax`, etc.) |
| `projects.js` | Every project shown on Home and the Projects page, plus each project's detail page content |
| `photography.js` | Every photo in the gallery and homepage preview |
| `timeline.js` | About page journey timeline and future-goals list |

### Hero image

The hero is a full-bleed cinematic photograph behind the name and intro copy, with a dark gradient overlay for legibility. It's the real photo (`public/assets/hero/hero.jpg`) — `profile.heroImage` points at it and `profile.heroImageAlt` is its alt text. `HeroSection.jsx` only ever reads fields off `profile` — it never imports or references an image file directly. To replace the photo:

1. Drop the new image (and an optional mobile crop) into `public/assets/hero/`.
2. Point `profile.heroImage` at it (e.g. `/assets/hero/my-photo.jpg`).

No component changes required. The image renders with `object-fit: cover`, so it fills the frame without distortion or letterboxing.

**Two images, one config.** The actual source photo is an extreme-wide landscape (2.2:1) — on a tall phone screen, `object-fit: cover` alone would crop away most of its width and cut off the subject's outstretched arms, which are the point of the shot. Rather than fight that with CSS alone, `profile.heroImageMobile` points at a second file (`hero-mobile.jpg`) — the same photo, pre-cropped to a gentler ~1.24:1 ratio that survives a portrait crop with the full figure intact. `HeroSection.jsx` renders both through a single `<picture>` element with a `(max-width: 639px)` media query, so the browser picks the right one with no JS and no layout shift. `heroImageMobile` is optional — if you only set `heroImage`, that one file is used at every breakpoint.

**Focal point.** `profile.heroImageFocalPoint` is `{ default, mobile }` — each a CSS `object-position` value (e.g. `"50% 38%"`) controlling which part of the image stays anchored as `cover` crops it. Tune these if a future photo's subject sits somewhere else in frame. A plain string also works if you want the same focal point everywhere.

The gradient overlay (heavier top/left where the text sits, lighter bottom/right) is layered in CSS on top of whatever image is there, so contrast holds up reasonably well regardless of the photo's own tonality.

**The hero always renders dark**, independent of the site's light/dark theme toggle — same way a photo with text over it would look the same regardless of what mode a viewer's OS is in. The navbar is theme-aware everywhere else on the site, but forces light text/icons while it's floating transparently over the hero (see `Navbar.jsx`'s `scrolled` state and `ThemeToggle`'s `forceLight` prop), then switches back to normal theme-aware colors once scrolled past it.

### Feature flags

`siteConfig.js` flags are wired end-to-end: `enablePhotography: false` removes the Photography nav item (`navigation.js` → `lib/navigation.js`), the homepage's photography section, and the `/photography` route itself (falls through to 404). `enableThemeToggle: false` removes the toggle button from the navbar. `enableHeroParallax: false` freezes the hero's background-image parallax and content fade to static values.

## Project structure

```
src/
  data/         # profile.js, navigation.js, siteConfig.js, projects.js, photography.js, timeline.js
  lib/          # profile.js (derived helpers), navigation.js (flag filtering), iconRegistry.js,
                # motion.js (animation variants), cn.js (className merge helper)
  components/   # shared UI: Navbar, Footer, Section, SectionHeading, ProjectCard, etc.
  pages/        # one file per route
  hooks/        # useSmoothScroll, ThemeProvider/ThemeContext
```

## Adding content

- **New project** → add an object to `src/data/projects.js`. It automatically appears on the Projects page and gets a working detail route at `/projects/:slug`. Add it to `featuredProjects` to also show it on the homepage.
- **New photo** → add an object to `src/data/photography.js`.
- **New nav item** → add to `src/data/navigation.js`; gate it behind a new `siteConfig.js` flag if it should be toggleable.
- **New social link** → add an entry to `profile.socialLinks` (needs an `icon` id registered in `src/lib/iconRegistry.js`). Footer and the Contact page both pick it up automatically.
- **Future content types** (research, publications, blog, case studies) → follow the same pattern: a new data file, a card component modeled on `ProjectCard.jsx`, a page modeled on `Projects.jsx`, and a nav entry gated by a new `siteConfig` flag.

## Design tokens

All colors, type sizes, and spacing live in `src/index.css` inside the `@theme` block:

- Colors are CSS variables (`--bg`, `--ink`, etc.) that get reassigned under `:root.dark`, so dark/light theming is a single class toggle on `<html>`.
- The fluid type scale (`--text-display-1` through `--text-lede`) uses Tailwind v4's reserved `--text-*` namespace, so they're used as plain utility classes (`text-display-1`), not arbitrary values.

## Known placeholders

- `public/resume.pdf` is a placeholder — replace with the real resume (same filename, so the download link needs no code changes).
- Project cover art and photography tiles are abstract SVG/gradient placeholders standing in for real screenshots and photographs.

The hero image is real — `hero.jpg` / `hero-mobile.jpg` in `public/assets/hero/` — see "Hero image" above for how to replace it if needed.

## One intentional exception

`index.html`'s `<title>` and meta description still hardcode the name/tagline. This is unavoidable without adding an HTML-templating step to the build: `index.html` is static markup served before any JavaScript — including `profile.js` — runs, so it can't read from the data layer at request time. If this should also become configuration-driven, it needs a small Vite plugin or an `index.html` template transform, which is a build-tooling change rather than a component refactor.
