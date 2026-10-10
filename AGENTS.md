# AGENTS.md – romanarpas.eu

Project instructions for coding agents (Claude Code, Codex, …). They extend Paddy's global `~/AGENTS.md`, `~/OPINIONS.md` and
`~/PLANS.md` (maintained in the `patrikcepr/ai-setup` repo); where this file is more specific, it wins.

## Project

Single-page website of Roman Arpáš, gestalt therapist (psychotherapy, Praha 7 / online) – https://www.romanarpas.eu/.
React 19 + TypeScript + Vite, SCSS modules, HTML prerendered at build time. No backend, no router, no runtime data fetching.

-   Talk to Patrik in Czech. Site content is Czech; code, comments, commit bodies may be Czech or English (match the surrounding file).
-   Never invent facts about Roman or his practice (prices, training, dates, wording of his texts). Content changes come from him
    via Patrik; ask when something is missing.

## Commands

| Command           | Purpose                                                               |
| ----------------- | --------------------------------------------------------------------- |
| `npm start`       | Dev server, http://localhost:5173                                     |
| `npm run lint`    | ESLint + Prettier rules for `src/**/*.{ts,tsx}`                       |
| `npm run ts-lint` | Type check                                                            |
| `npm run build`   | Type check, client build, SSR build, prerender into `dist/index.html` |
| `npm run preview` | Serve `dist/` (use after `build` to check the prerendered page)       |

Styles: `npx stylelint --customSyntax postcss-scss "src/**/*.scss"` (not part of `npm run lint`).

Run lint, ts-lint, stylelint and build before every commit. Git hooks are **not** installed (`.husky/` has no hooks), so nothing
runs automatically on commit; CI (`.github/workflows/ci.yml`) runs lint, ts-lint and build on every push and PR.

## Structure

-   `src/App.tsx` composes the sections from `src/components/Layout/*` (NavTop, Hero, Terapie, What, Who, Price, Contact, Footer).
-   `src/components/UI/` – shared primitives (`Icon`, `GestaltMark`).
-   `src/data/site.ts` – contact details and practical facts, the single source of truth for them.
-   `src/entry-server.tsx` + `scripts/prerender.mjs` – build-time prerender; `src/index.tsx` hydrates it.
-   `src/styles/global.scss` – design tokens, typography, buttons; `src/styles/_mixins.scss` – breakpoints (`up()`, `down()`).
-   `public/` – copied as-is: `.htaccess` (redirects + original WEDOS rules), icons, `og-image.jpg`, robots, sitemap, manifest.
-   Import via aliases `assets/`, `components/`, `data/`, `hooks/`, `styles/` (see `tsconfig.json`, `vite.config.mts`).

## Conventions

-   Styling: SCSS only – a `*.module.scss` per component plus global tokens/classes in `global.scss`. No CSS-in-JS, no utility
    framework, no Bootstrap.
-   Code must be SSR-safe: no `window`/`document` at module scope or during render; browser-only work goes in effects.
    Prerendered and hydrated markup must match (only `© year` uses `suppressHydrationWarning`).
-   Texts: user-facing Czech strings currently live inline in the section components and in `src/data/site.ts`. A move to a single
    catalogue (`src/locales/cs.json`) is planned – update this section when it lands.
-   Content kept in several places – change all of them together:
    -   Name, role, claim, contact, price: components / `src/data/site.ts`, meta tags and JSON-LD in `index.html`,
        `public/manifest.json`, and `public/og-image.jpg` (1200×630, **text is baked into the image** – regenerate it in the same
        layout when the name, role or hero claim changes).
    -   `public/sitemap.xml` `lastmod` when content changes noticeably.
-   Visual fidelity: the approved mockup is the reference; check changes in a real browser at 1440, 768 and 390 px wide and fix
    anything that looks off, even if unrelated.
-   Before deleting any asset, grep the whole repo for its filename. `src/assets/img/` holds pre-redesign images kept until Patrik
    confirms they can go.

## Git and deployment

-   `development` is the integration branch, `main` is production – **every push to `main` deploys** `dist/` over FTP to WEDOS.
-   Flow: branch from `development` → PR into `development` (squash merge) → release PR `development` → `main` (**merge commit**,
    never squash, otherwise the branches diverge). Never push or merge without Patrik's explicit go-ahead.
-   Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:` …). Never add the agent as co-author.
-   Add a line to `CHANGELOG.md` under `[Unreleased]` for user-visible or infrastructure changes.
-   After a release, verify production (`curl` the page, check texts, 301 redirects of `http://` and the bare domain).

## Plans

For larger changes write an ExecPlan following `~/PLANS.md` and keep it in `docs/plans/<topic>.md`. If `~/PLANS.md` is not
available, ask Patrik for it rather than improvising the format.
