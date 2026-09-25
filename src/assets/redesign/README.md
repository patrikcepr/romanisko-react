# Roman Arpáš — redesign assets

Prepared from the existing `src/assets/img` files. Originals are kept untouched in `originals/`.

## Recommended use

### Logo
- `logo/gestalt-mark-transparent.png` — preferred flexible mark; white negative space is transparent.
- `logo/gestalt-mark-original.png` — current mark unchanged.

### Portrait
- `roman-portrait-landscape-3x2.webp` — desktop “O mně”.
- `roman-portrait-square.webp` — compact/card use.
- `roman-portrait-4x5.webp` — mobile portrait.

### Roman's artwork
The crops deliberately retain a large recognizable portion of the original drawing rather than reducing it to an abstract detail.
- `roman-artwork-wide-16x9.webp` — wide divider / desktop artwork section.
- `roman-artwork-hero-4x3.webp` — hero or two-column layout.
- `roman-artwork-mobile-4x5.webp` — mobile.
- `roman-artwork-detail-1x1.webp` — optional square detail.
- `roman-artwork-full.webp` — optimized full image; useful with CSS `object-fit: cover` + `object-position`.

## Implementation note
Prefer `<picture>` or responsive `<img>` sources and keep the original JPG/SVG files only as masters.
For the artwork, start with `object-position: 55% 50%` and adjust per breakpoint if needed.
