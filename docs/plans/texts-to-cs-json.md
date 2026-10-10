# Move all user-facing texts into one catalogue, `src/locales/cs.json`

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. It follows the ExecPlan rules in Paddy's global `~/PLANS.md` (kept in the `patrikcepr/ai-setup` repository); this repository has no `PLANS.md` of its own.

## Purpose / Big Picture

Today every Czech sentence on https://www.romanarpas.eu/ is typed directly inside React components, spread over eight files and mixed with markup, CSS class names and SVG paths. When Roman sends a wording change, someone has to find the right component and edit JSX without breaking it. After this change all texts the visitor can see or hear (headings, paragraphs, button labels, image descriptions for screen readers, link titles) live in a single JSON file, `src/locales/cs.json`, grouped by page section. Editing a text means editing one value in that file; the components only arrange the texts.

The visitor must not notice anything: the page has to look and behave exactly as before. That is also how we prove the work is correct. The site is prerendered at build time into `dist/index.html`, and that file is deterministic (two builds of the same code are byte-identical, verified on 2026-10-10). So after the migration the prerendered HTML must equal the HTML built before the migration, apart from two harmless differences explained in Validation and Acceptance.

## Progress

-   [x] (2026-10-10 17:40Z) Research: read all components, confirmed the build is deterministic, measured how many JSX texts a lint rule would flag (49).
-   [x] (2026-10-10 17:55Z) Plan written, waiting for Patrik's approval.
-   [x] (2026-10-10 18:05Z) Plan approved by Patrik; all three milestones to be done in one go and reviewed as one PR.
-   [x] (2026-10-10 18:20Z) Milestone 1: baseline taken, `locales` alias, `src/locales/cs.json`, `rich()`, App/NavTop/Hero/Footer migrated.
-   [x] (2026-10-10 18:35Z) Milestone 2: Terapie, What, Who, Price, Contact and the fact texts migrated; output identical to baseline.
-   [x] (2026-10-10 18:50Z) Milestone 3: `react/jsx-no-literals` enabled (0 findings), `AGENTS.md`, `README.md`, `CHANGELOG.md` updated.
-   [x] (2026-10-10 18:50Z) Verified: lint, ts-lint, stylelint, build; normalised diff; browser interactions without console errors; a tag typo fails the build; one changed value changes one place only.
-   [ ] Pull request into `development`, then release into `main` after Patrik's go-ahead.

## Surprises & Discoveries

-   Observation: two builds of unchanged code produce a byte-identical `dist/index.html`, so "identical output" is a usable acceptance test.
    Evidence: `npm run build`, copy `dist/index.html`, build again, `cmp` reports no difference.
-   Observation: when React renders two neighbouring text pieces (for example a variable followed by literal text) it inserts an empty HTML comment `<!-- -->` between them in the prerendered HTML. Moving text from JSX into variables can add or remove these markers without any visible change.
    Evidence: the footer renders as `Roman Arpáš<!-- --> · Gestalt terapeut`.
-   Observation: TypeScript types string values of an imported JSON file as `string`, not as their literal values, so a `Record` keyed by topic ids cannot prove at compile time that every topic in `cs.terapie.topics` has a hand-drawn mark.
    Evidence: `Record<(typeof cs.terapie.topics)[number]["id"], ReactNode>` collapses to `Record<string, ReactNode>`. Solved with `markFor()` in `Terapie.tsx`, which throws during the prerender when a mark is missing.
-   Observation: the Contact section rendered `class="section undefined"` since the redesign, because `Contact.tsx` referenced `styles.contact` and `styles.info`, which do not exist in `Contact.module.scss`.
    Evidence: `grep -o 'class="[^"]*undefined[^"]*"' dist/index.html` → one hit. Fixed in this change; it is the only difference to the baseline (see Outcomes).

## Decision Log

-   Decision: import the JSON file directly (`import cs from "locales/cs.json"`) and read values as plain properties (`cs.hero.title`); no i18n library.
    Rationale: the site has one language and no plans for more (Patrik, 2026-10-10). TypeScript already types JSON imports (`resolveJsonModule` is on in `tsconfig.json`), so a misspelled key is a compile error. A library such as i18next would add a dependency, a runtime and string keys that are not type-checked, for no benefit here.
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: texts that contain links, line breaks or other markup are written with small XML-like tags inside the string, for example `"kontaktovat <phone>telefonicky</phone>"`, and turned into React elements by a ~30-line helper `rich()` in `src/locales/rich.tsx`.
    Rationale: the sentence stays whole and readable for whoever edits the JSON, and the component decides what a tag becomes (which `href`, which class). Splitting sentences into fragments around each link was rejected because the fragments are unreadable on their own and word order cannot be changed. A library (`react-i18next`'s `Trans`) was rejected because the helper is short and the rest of that library is unneeded.
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: non-breaking spaces are written in the JSON as the escape `\u00a0`, never as an invisible literal character.
    Rationale: Czech typography needs them after one-letter prepositions and inside numbers like `1 000 Kč`; the escape makes them visible in review. JSON parses the escape into the same character React renders for `&nbsp;`, so output does not change.
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: `src/data/site.ts` keeps facts that are data rather than language (name, phone, e-mail, address, links, map URL, Skype switch, the icon of each fact). The words of the three facts ("55 minut", "délka setkání", …) move to `cs.json`.
    Rationale: one place for wording, one place for contact data; the JSON-LD block in `index.html` continues to mirror `site.ts`.
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: the meta tags and JSON-LD in `index.html` stay hand-written in this plan.
    Rationale: generating them from `cs.json` and `site.ts` needs a small Vite plugin and changes the build; it is a separate, reviewable change. Recommended as a follow-up plan.
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: no automatic check for unused keys in `cs.json`; when the last use of a key is removed, the key is removed in the same change (rule from Paddy's `~/OPINIONS.md`).
    Rationale: with ~80 keys a reliable checker costs more than it saves. Revisit if the catalogue grows.
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: no `footer` group in `cs.json`; the role "Gestalt terapeut" is `common.role`, shared by header and footer, and the name comes from `CONTACT.name`. The phrase "(otevře se v novém okně)" is `common.newWindow`, shared by Who and Contact.
    Rationale: one value per wording, so header and footer cannot drift apart again (they did before the 2026-10-10 text change).
    Date/Author: 2026-10-10, Claude for Patrik.

-   Decision: `react/jsx-no-literals` allows the strings `·` and `©`.
    Rationale: they are typography in the footer layout, not wording; moving them to the catalogue would only fragment it.
    Date/Author: 2026-10-10, Claude for Patrik.

## Outcomes & Retrospective

All visible and screen-reader texts now live in `src/locales/cs.json`; the components contain no Czech wording (only `src/data/site.ts` keeps the name and address as data). After normalisation the prerendered `dist/index.html` differs from the baseline in exactly one line, the intended fix of the Contact class:

    406c406
    < <section id="contact" class="section undefined" aria-labelledby="contact-title">
    ---
    > <section id="contact" class="section" aria-labelledby="contact-title">

In headless Chrome the price toggle switches "Zobrazit ceník"/"Skrýt ceník", the mobile menu label switches "Otevřít menu"/"Zavřít menu", and the console shows no React errors. Renaming `<br/>` to `<bx/>` in `hero.title` stops `npm run build` with `rich(): unknown tag <bx> in "Terapie <bx/>jako prostor pro změnu"`. Changing `hero.cta` changes only the hero button in the output. Remaining follow-ups: generate meta tags and JSON-LD from `cs.json`/`site.ts` (separate plan), and install the missing Git hooks (separate PR).

## Context and Orientation

The repository `patrikcepr/romanisko-react` is a one-page website built with React 19, TypeScript and Vite. Commands run from the repository root (on Patrik's machine `C:\Users\favel\srv\romanisko-react`; Git Bash and PowerShell both work for `npm`). Read `AGENTS.md` in the repository root first; it describes commands, structure and the Git flow.

The page is composed in `src/App.tsx`, which renders a skip link ("Přeskočit na obsah") and these sections, each a folder under `src/components/Layout/`: `NavTop/index.tsx` (header with name, role, menu links, button, mobile menu labels), `Hero/Hero.tsx` (eyebrow line, main heading, lead paragraph, button, three facts), `Terapie/Terapie.tsx` (heading, six topics in the `TOPICS` array, closing statement), `What/What.tsx` (heading "Jak pracuji", three paragraphs, drawing credit, `ARTWORK_ALT` image description), `Who/Who.tsx` (heading, portrait description, photo credit with a link, three paragraphs) which also renders `Price/Price.tsx` (heading "Praktické informace", facts, a note with phone and e-mail links, show/hide button, three sub-headings with paragraphs, one of them depending on whether Skype is enabled), `Contact/Contact.tsx` (heading, lead, address, "Otevřít v mapách" link, channel labels, map title) and `Footer/index.tsx` (name and role, copyright year, phone, e-mail).

Shared data lives in `src/data/site.ts`: `CONTACT` (name, street, city, phone, e-mail and their link forms, maps links, `skype` which is `null` to hide Skype) and `FACTS` (three items with an icon name, a value and a label, used by Hero and Price).

"Prerender" means: `npm run build` first builds the browser bundle, then builds `src/entry-server.tsx` for Node, and `scripts/prerender.mjs` renders the whole app to an HTML string and writes it into `dist/index.html`. In the browser `src/index.tsx` then "hydrates" that HTML, which means React attaches to the existing markup instead of re-creating it. If the browser render differs from the prerendered HTML, React logs a hydration error in the browser console; this plan must not introduce any.

Path aliases (`assets/`, `components/`, `data/`, `hooks/`, `styles/`) are declared twice: in `tsconfig.json` under `compilerOptions.paths` and in `vite.config.mts` under `resolve.alias`. A new alias must be added to both.

A "screen-reader text" is text that is not visible but is read aloud by assistive software: `alt` on images, `title` on the map iframe, `aria-label` on the navigation, and spans with the class `visually-hidden`. These are user-facing and move to the catalogue too. CSS class names, `id`s, `href`s and SVG data are not texts and stay in code.

## Plan of Work

Milestone 1 creates the mechanism and proves it on the frame of the page. First build the current `development` branch and keep a copy of `dist/index.html` outside the repository as the baseline. Then add the alias `locales` (pointing to `src/locales`) to `tsconfig.json` and `vite.config.mts`. Create `src/locales/cs.json` with the top-level groups `app`, `nav`, `hero`, `facts`, `terapie`, `what`, `who`, `price`, `contact`, `footer`, `common`. Create `src/locales/rich.tsx` with the `rich()` helper described under Interfaces and Dependencies. Then migrate `src/App.tsx` (skip link), `NavTop/index.tsx` (the menu labels in `LINKS`, "Domluvit setkání", "Otevřít menu"/"Zavřít menu", "Hlavní navigace"; the brand name comes from `CONTACT.name`, the role from `common.role`), `Hero/Hero.tsx` and `Footer/index.tsx` (role from `common.role`, so header and footer cannot drift apart again). The hero heading uses a `<br/>` tag and the lead uses `<br/>` tags rendered as `<br className={styles.br} />`. At the end of the milestone the prerendered HTML equals the baseline after normalisation and the browser console shows no errors.

Milestone 2 migrates the rest with the same technique. In `Terapie.tsx` the `TOPICS` array becomes `cs.terapie.topics`, an array of objects `{ "id", "title", "text" }` with ids `stres`, `deprese`, `identita`, `sebevrazda`, `potencial`, `smysl`; the component keeps the hand-drawn marks in a `Record` keyed by these ids so each topic still gets its mark. In `What.tsx` the three paragraphs, the credit and the image description move; the capitals in "TADY a TEĎ", "KDO", "TVARU" and "GESTALT" are Roman's wording and are copied as they are. In `Who.tsx` the photo credit becomes `"Foto ©\u00a02021 <link>Peter Matas</link>"`, where `link` renders the existing anchor with its hidden "(otevře se v novém okně)" text taken from `common.newWindow`. In `Price.tsx` the note uses `<phone>` and `<email>` tags; the online paragraph gets two complete variants, `price.online` and `price.onlineWithSkype` (the latter containing a `<skype/>` tag), and the component picks one by `CONTACT.skype`. In `Contact.tsx` the map title is composed as `${cs.contact.mapTitle}: ${CONTACT.street}, ${CONTACT.city}` so the address is not duplicated. Finally, `FACTS` in `src/data/site.ts` keeps only `icon` and a `key` (`duration`, `place`, `price`), and the words move to `cs.facts.<key>.value` and `.label`; Hero and Price read both. At the end no Czech sentence remains in any `.tsx` file and the output still equals the baseline.

Milestone 3 locks the result in and documents it. Enable the ESLint rule `react/jsx-no-literals` in `.eslintrc.json` with `{ "noStrings": false, "allowedStrings": ["·"] }`; it reports any text written directly between JSX tags (it does not check attributes such as `alt`, so those remain a review point). Today it reports 49 places; after Milestone 2 it must report none. Update the "Texts" bullet in `AGENTS.md`, the "Content notes" in `README.md` (how to edit a text, the tag syntax, `\u00a0`), and add a `Changed` line to `CHANGELOG.md`.

## Concrete Steps

All commands run in the repository root in Git Bash. `$BASE` is a folder outside the repository, for example the agent's scratchpad.

Before starting:

    git switch development && git pull
    git switch -c refactor/texts-cs-json
    npm run build
    cp dist/index.html "$BASE/baseline.html"

After each milestone:

    npm run lint && npm run ts-lint && npx stylelint --customSyntax postcss-scss "src/**/*.scss" && npm run build
    normalise() { sed -e 's/<!-- -->//g' -e 's/index-[A-Za-z0-9_-]*\.js/index.js/g' "$1"; }
    diff <(normalise "$BASE/baseline.html") <(normalise dist/index.html) && echo IDENTICAL

Expected last line: `IDENTICAL`. Any other output is a real difference (a lost non-breaking space, a changed word, a missing link) and must be fixed before continuing.

Browser check after each milestone: `npm run preview` serves `dist/` on http://localhost:4173. Open it in Chrome at widths 1440, 768 and 390 px, open the DevTools console and reload: there must be no red errors (in particular no "Hydration failed" or "did not match"). Click "Zobrazit ceník" (texts swap to "Skrýt ceník"), open and close the mobile menu (its hidden label switches between "Otevřít menu" and "Zavřít menu").

Per PLANS.md: after each milestone stop, summarise, and ask Patrik before committing (`refactor: …` Conventional Commit, no agent co-author) and before starting the next milestone. Push and PR only with his go-ahead.

## Validation and Acceptance

The work is accepted when all of the following hold. The normalised diff above prints `IDENTICAL`; the two normalisations are needed because the JavaScript file name contains a content hash that changes whenever code changes, and because React's `<!-- -->` text separators depend on how text is split between variables and literals, not on what the visitor sees. `npm run lint` passes with `react/jsx-no-literals` enabled. `grep -rnP "[áčďéěíňóřšťúůýž]" src --include=*.tsx` finds no Czech words in components (comments excepted). The browser console is clean after reload at all three widths. Changing one value in `src/locales/cs.json`, for example `hero.cta`, and running `npm start` changes that button on http://localhost:5173 and nowhere else; revert the experiment afterwards.

## Idempotence and Recovery

Every step only edits source files on a feature branch, so it can be repeated or undone with `git restore` / `git switch development`. The baseline file must be taken from the unmodified `development` build; if it is lost, rebuild it from `development` in a separate worktree (`git worktree add "$BASE/wt" development`, then `npm ci && npm run build` there). Nothing is deployed until the release PR into `main` is merged.

## Artifacts and Notes

Shape of the catalogue (texts abbreviated with …, real values are copied verbatim from the components):

    {
        "common": { "role": "Gestalt terapeut", "newWindow": "(otevře se v novém okně)" },
        "app": { "skipLink": "Přeskočit na obsah" },
        "nav": { "links": { "terapie": "Terapie", "what": "Gestalt", "who": "O mně", "price": "Ceník", "contact": "Kontakt" }, "cta": "Domluvit setkání", … },
        "hero": { "eyebrow": "Psychoterapie · Praha 7 / online", "title": "Terapie <br/>jako prostor pro\u00a0změnu", "lead": "…", "cta": "Domluvit první setkání" },
        "facts": { "duration": { "value": "55 minut", "label": "délka setkání" }, "place": { … }, "price": { … } },
        "price": { "note": "V případě zájmu mě můžete kontaktovat <phone>telefonicky</phone>, <email>e-mailem</email> nebo SMS. …", … }
    }

Using it in a component:

    import cs from "locales/cs.json";
    import { rich } from "locales/rich";

    <h1 id="hero-title" className={styles.title}>{rich(cs.hero.title, { br: () => <br /> })}</h1>

## Interfaces and Dependencies

No new runtime or development dependencies. `react/jsx-no-literals` is part of the already installed `eslint-plugin-react`.

In `src/locales/rich.tsx` define:

    type TagRenderer = (children?: ReactNode) => ReactNode;
    export const rich: (text: string, tags?: Record<string, TagRenderer>) => ReactNode;

It finds `<name>…</name>` (not nested) and self-closing `<name/>` in `text`, replaces each with `tags[name](inner text)` (or `tags[name]()` for self-closing) and keeps the text in between as plain strings. Each produced element gets a React `key` so the result can be rendered as an array without warnings. An unknown tag name throws an `Error` naming the tag and the text; because the prerender runs during `npm run build`, a typo in the JSON fails the build instead of shipping visible `<tag>` text.

In `src/locales/cs.json`: the groups listed in Plan of Work. Keys are English camelCase, values are the exact Czech texts.

Revision note (2026-10-10 18:50Z): updated Progress, Surprises & Discoveries, Decision Log and Outcomes after implementing all three milestones; recorded the JSON typing limitation, the Contact class fix and the `common` group instead of `footer`.
