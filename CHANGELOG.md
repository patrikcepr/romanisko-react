# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

-   Redirect of all address variants (http, without www) to `https://www.romanarpas.eu` via `public/.htaccess` (WEDOS default rules kept);
    public access to the FTP deploy state file is blocked.

### Changed

-   README rewritten for the Vite setup; ESLint now also checks React hooks rules.

### Removed

-   Create React App leftovers: root `index.d.ts`, unused path aliases (`layout`, `UI`) and unused dev dependencies
    (`normalize.css`, `autoprefixer`, `postcss`, `postcss-html`, `stylelint-config-html`, `stylelint-config-prettier*`).

## 2026-09 – Redesign

### Added

-   New design based on the approved mockup: header with the Gestalt logo, hero with artwork, topics with statement,
    "Jak pracuji" with Roman's drawing, "O mně" with practical information, contact with map, footer.
-   Prerendered HTML at build time, Open Graph image and tags, JSON-LD structured data, sitemap, new icons.

### Removed

-   Bootstrap / react-bootstrap / react-bootstrap-icons.
