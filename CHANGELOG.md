# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

-   Redirect of all address variants (http, without www) to `https://www.romanarpas.eu` via `public/.htaccess` (WEDOS default rules kept);
    public access to the FTP deploy state file is blocked.

### Changed

-   Texts: "Gestalt terapeut" under the name in the header and footer, hero title "Terapie jako prostor pro změnu"
    (fewer repetitions of "psychoterapie"); meta tags, JSON-LD, manifest and OG image updated to mention both.
-   All user-facing texts moved from the components to `src/locales/cs.json`; ESLint rejects new texts written directly in JSX.
-   README rewritten for the Vite setup; ESLint now also checks React hooks rules.

### Removed

-   Create React App leftovers: root `index.d.ts`, unused path aliases (`layout`, `UI`) and unused dev dependencies
    (`normalize.css`, `autoprefixer`, `postcss`, `postcss-html`, `stylelint-config-html`, `stylelint-config-prettier*`).

### Fixed

-   Git hooks were never committed, so lint-staged and commitlint did not run; added `pre-commit` and `commit-msg`,
    husky upgraded to v9.
-   Security alerts in dev tooling (`source-map-js`, `postcss-selector-parser`): stylelint 14 → 17 with its configs,
    typescript-eslint 5 → 8; Stylelint now runs in CI (`npm run stylelint`).

## 2026-09 – Redesign

### Added

-   New design based on the approved mockup: header with the Gestalt logo, hero with artwork, topics with statement,
    "Jak pracuji" with Roman's drawing, "O mně" with practical information, contact with map, footer.
-   Prerendered HTML at build time, Open Graph image and tags, JSON-LD structured data, sitemap, new icons.

### Removed

-   Bootstrap / react-bootstrap / react-bootstrap-icons.
