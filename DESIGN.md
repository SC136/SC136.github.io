---
version: alpha
name: sc.is-a.dev
description: Material 3 Expressive personal portfolio, live activity dashboard, and creative playground
colors:
  primary: "#ffb4a1"
  on-primary: "#561f10"
  primary-container: "#723524"
  on-primary-container: "#ffdbd2"
  secondary: "#e7bdb3"
  on-secondary: "#442a23"
  secondary-container: "#5d4038"
  on-secondary-container: "#ffdbd2"
  tertiary: "#d9c58d"
  on-tertiary: "#3b2f05"
  tertiary-container: "#534519"
  on-tertiary-container: "#f7e1a6"
  surface: "#1a110f"
  surface-lowest: "#140c0a"
  surface-low: "#231917"
  surface-container: "#271d1b"
  surface-high: "#322825"
  surface-highest: "#3d3230"
  on-surface: "#f1dfda"
  on-surface-variant: "#d8c2bc"
  outline: "#a08c88"
  outline-variant: "#53433f"
  error: "#ffb4ab"
  on-error: "#690005"
typography:
  display-lg:
    fontFamily: Google Sans Flex
    fontSize: 2.6rem
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.01em
  display-accent:
    fontFamily: Docallisme
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Google Sans Flex
    fontSize: 2.05rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Google Sans Flex
    fontSize: 1.7rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Google Sans Flex
    fontSize: 1.3rem
    fontWeight: 500
    lineHeight: 1.25
  title-lg:
    fontFamily: Google Sans Flex
    fontSize: 1.15rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Google Sans Flex
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Google Sans Flex
    fontSize: 0.95rem
    fontWeight: 400
    lineHeight: 1.45
  body-sm:
    fontFamily: Google Sans Flex
    fontSize: 0.86rem
    fontWeight: 400
    lineHeight: 1.4
  label-lg:
    fontFamily: Google Sans Flex
    fontSize: 0.92rem
    fontWeight: 500
    lineHeight: 1
  label-md:
    fontFamily: Google Sans Flex
    fontSize: 0.8rem
    fontWeight: 500
    lineHeight: 1.2
  label-sm:
    fontFamily: Google Sans Flex
    fontSize: 0.72rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.04em
  handwritten:
    fontFamily: Caveat
    fontSize: 1.9rem
    fontWeight: 600
    lineHeight: 1.2
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 28px
  3xl: 36px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  gutter: 16px
  max-width: 1180px
components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
  card:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.lg}"
  card-interactive:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.lg}"
  card-container:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 20px
    height: 40px
  button-secondary-active:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.md}"
  button-icon:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    size: 48px
  button-icon-active:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
  shape-icon-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    size: 52px
  shape-icon-tonal:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    size: 52px
  shape-icon-gold:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    size: 52px
  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 12px
  badge-tonal:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 12px
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 12px
  badge-tertiary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 12px
  tile:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 18px
  tile-hover:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
  chip:
    backgroundColor: "{colors.surface-lowest}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 14px
    height: 32px
  chip-hover:
    backgroundColor: "{colors.surface-lowest}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.lg}"
  chip-active:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 14px
    height: 32px
  guest-note-primary:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  guest-note-secondary:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  guest-note-tertiary:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  input:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 16px
  input-focus:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
  kbd:
    backgroundColor: "{colors.surface-highest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    height: 32px
  dialog:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.lg}"
  notification-banner:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 18px
  status-alert:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px
  outline-indicator:
    backgroundColor: "{colors.outline-variant}"
    textColor: "{colors.outline}"
    rounded: "{rounded.xs}"
---

## Overview

Architectural Playfulness meets Material 3 Expressive.

The `sc.is-a.dev` design system powers the personal portfolio, live status hub, and digital workspace for SC136. Unlike traditional static portfolios or generic SaaS landing pages, this interface is built on Google's Material 3 Expressive design language: organic geometry, kinetic spring physics, continuous shape morphing, live activity telemetry, and tactile, sticker-like components.

### Core Aesthetic Principles

- **Organic & Whimsical Geometry**: UI elements break out of rigid rectangles through bespoke cookie-cutter SVG polygon clip-paths (scalloped cookies, 8-petaled flowers, starbursts, clover leaves, and sunbursts).
- **Kinetic Spring Transitions**: Interactive elements do not simply change color—they physically morph. Corner radii ease dynamically between circular pill shapes (`999px`) and tight rounded rectangles (`12px` or `14px`) using physical spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Tonal Elevation over Artificial Shadows**: Spatial depth is rendered through a 6-tier tonal surface luminance hierarchy (`surface-lowest` to `surface-highest`), supplemented by subtle OKLab color-mix glows rather than murky black drop shadows.
- **Dynamic Seed Color Generation**: Rooted in a warm Coral seed (`#e79a86`) using Google's M3 Tonal Spot scheme, with instant client-side switching across 6 alternative seed harmonies (Lavender, Teal, Mint, Sand, Pink, Lime), individual brand integrations, and reactive conic album-art extraction.
- **Dark Mode First**: The primary canvas defaults to a warm, velvety dark substrate (`#1a110f`) paired with high-contrast, luminous pastel accents, with an equally deliberate warm light substrate (`#fff8f6`).

---

## Colors

The color system is derived from Google's Material Design 3 Tonal Spot algorithm, anchored by the primary Coral seed (`#e79a86`). Every hue is paired with a mathematically verified, accessible high-contrast ink color to exceed WCAG AA (>= 4.5:1) and AAA (>= 7:1) readability thresholds.

### Primary Semantic Palette (Coral Scheme — Canonical Dark Mode)

| Token | Hex | Role & Application | Contrast Pair |
| :--- | :--- | :--- | :--- |
| `primary` | `#ffb4a1` | Hero focal points, active state indicators, primary action button fills, heatmap peak tier (`l4`), route paths | Pair with `on-primary` (10.2:1) |
| `on-primary` | `#561f10` | High-contrast deep ink text and glyphs rendered over `primary` backgrounds | - |
| `primary-container` | `#723524` | Tonal container backgrounds, guestbook note cards (3n+1), loader halos, active chip fills | Pair with `on-primary-container` (7.3:1) |
| `on-primary-container` | `#ffdbd2` | Soft luminous text and glyphs rendered over `primary-container` backgrounds | - |
| `secondary` | `#e7bdb3` | Complementary tonal accents, badges, metadata highlights | Pair with `on-secondary` (7.6:1) |
| `on-secondary` | `#442a23` | High-contrast ink text for secondary accent surfaces | - |
| `secondary-container` | `#5d4038` | Default interactive buttons, guestbook note cards (3n+2), media progress backgrounds | Pair with `on-secondary-container` (8.9:1) |
| `on-secondary-container` | `#ffdbd2` | Text and icons placed on secondary container buttons and badges | - |
| `tertiary` | `#d9c58d` | Warm gold tertiary accent, special highlights, decorative borders | Pair with `on-tertiary` (10.8:1) |
| `on-tertiary` | `#3b2f05` | High-contrast dark ink for tertiary surfaces | - |
| `tertiary-container` | `#534519` | Warm gold container backgrounds, guestbook note cards (3n), gold shape-icon fills | Pair with `on-tertiary-container` (9.1:1) |
| `on-tertiary-container` | `#f7e1a6` | Luminous champagne text for tertiary container components | - |
| `error` | `#ffb4ab` | Destructive actions, system alerts, negative guestbook validation notices | Pair with `on-error` (9.8:1) |
| `on-error` | `#690005` | Deep ink text placed over error badge surfaces | - |

### Surface Hierarchy & Contrast Tokens

| Token | Hex | Spatial Level & Purpose |
| :--- | :--- | :--- |
| `surface-lowest` | `#140c0a` | Deepest base: canvas behind maps, sunken frame cutouts, route backdrops |
| `surface` | `#1a110f` | Root viewport canvas background (`body`) |
| `surface-low` | `#231917` | Bento grid card backgrounds, base card containers, dialogue backdrops |
| `surface-container` | `#271d1b` | Mid-tier containers, photo frames, guestbook wall containers |
| `surface-high` | `#322825` | Elevated interactive surfaces: tiles, inputs, modal dialogs, icon buttons |
| `surface-highest` | `#3d3230` | Topmost interactive controls: keyboard `<kbd>` caps, menu popups |
| `on-surface` | `#f1dfda` | Primary headline and body typography across all dark surfaces (13.3:1 vs `surface`) |
| `on-surface-variant` | `#d8c2bc` | Muted secondary copy, captions, subheads, icons, timestamps, markers |
| `outline` | `#a08c88` | High-emphasis structural borders, focused input outlines |
| `outline-variant` | `#53433f` | Subtle card dividers, chip borders, inactive input outlines |

### Light Mode Dual Palette (`[data-theme="light"]`)

When switched to light mode, the luminance values invert systematically to maintain warm coral undertones:
- `primary`: `#8f4b39` on `on-primary`: `#ffffff` (6.2:1)
- `primary-container`: `#ffdbd2` on `on-primary-container`: `#723524` (7.3:1)
- `secondary-container`: `#ffdbd2` on `on-secondary-container`: `#5d4038` (8.9:1)
- `tertiary`: `#6c5d2e` on `on-tertiary`: `#ffffff` (5.8:1)
- `surface`: `#fff8f6`, `surface-lowest`: `#ffffff`, `surface-low`: `#fff1ed`, `surface-container`: `#fceae6`, `surface-high`: `#f7e4e0`, `surface-highest`: `#f1dfda`
- `on-surface`: `#231917` (14.2:1 vs `surface`), `on-surface-variant`: `#53433f` (8.1:1 vs `surface`)
- `outline`: `#85736f`, `outline-variant`: `#d8c2bc`
- `error`: `#ba1a1a` on `on-error`: `#ffffff` (6.8:1)

### Extended Seed Palettes & Brand Overrides

1. **Lavender** (`data-palette="lavender"`): Seed `#5a5892` (Dark Primary: `#c3c0ff`, Container: `#424178`).
2. **Teal** (`data-palette="teal"`): Seed `#00696f` (Dark Primary: `#80d4db`, Container: `#004f54`).
3. **Mint** (`data-palette="mint"`): Seed `#2d6a45` (Dark Primary: `#95d5a7`, Container: `#10512f`).
4. **Sand** (`data-palette="sand"`): Seed `#745b0b` (Dark Primary: `#e5c36c`, Container: `#594400`).
5. **Pink** (`data-palette="pink"`): Seed `#894a67` (Dark Primary: `#feb0d1`, Container: `#6e334f`).
6. **Lime** (`data-palette="lime"`): Content Scheme Seed `#516600` (Dark Primary: `#d1fd40`, Container: `#b6e01e`).
7. **Brand Overrides**: Live cards adopt authenticated third-party brand accents in default mode:
   - Discord: `#5865f2` | Spotify: `#1ed760` | Last.fm: `#d51007` | AniList: `#02a9ff`
   - Letterboxd: `#ff8000` | Steam: `#66c0f4` | WakaTime: `#3b82f6` | GitHub: `#2da44e`
   - Strava: `#fc4c02` | Backloggd: `#fc6399`

---

## Typography

The typography system pairs geometric digital precision with expressive hand-crafted human personality.

### Typeface Roles

- **Primary Interface**: `Google Sans Flex`, a variable sans-serif font deployed across body text, titles, cards, and buttons for clarity and friendly optical balance.
- **Display Signature**: `Docallisme` (`assets/fonts/docallismeonstreet.otf`), a custom expressive street-art / graffiti font used strictly for the hero name identifier and personal brand mark.
- **Handwritten Annotations**: `Caveat`, an informal cursive script applied at a playful -6 degree rotation for spontaneous hints (e.g. "tap to spin avatar").
- **System Icons**: `Material Symbols Rounded`, optical size 24/20/18, variable fill `0` (outline) and `1` (solid).

### Typography Scale

| Scale Token | Font Family | Size | Weight | Line Height | Letter Spacing | Usage Rule |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Google Sans Flex | `2.6rem` | 500 | 1.1 | `-0.01em` | Hero introduction headlines, major section banners |
| `display-accent` | Docallisme | `3.5rem` | 400 | 1.1 | `0.02em` | Expressive personal name signature (`.intro .name`) |
| `headline-lg` | Google Sans Flex | `2.05rem` | 500 | 1.15 | `-0.01em` | Bento card titles, major widget headers |
| `headline-md` | Google Sans Flex | `1.7rem` | 500 | 1.2 | `-0.01em` | Modal dialogue headings, admin panel titles |
| `headline-sm` | Google Sans Flex | `1.3rem` | 500 | 1.25 | `0` | Subsection headings, dialog sub-headers |
| `title-lg` | Google Sans Flex | `1.15rem` | 600 | 1.3 | `0` | Prominent metric values, card sub-titles |
| `body-lg` | Google Sans Flex | `1rem` | 400 | 1.5 | `0` | Long-form reading copy, primary descriptive paragraphs |
| `body-md` | Google Sans Flex | `0.95rem` | 400 | 1.45 | `0` | Guestbook notes, intro list items, floating pill copy |
| `body-sm` | Google Sans Flex | `0.86rem` | 400 | 1.4 | `0` | Interactive chips, secondary widget notes, list rows |
| `label-lg` | Google Sans Flex | `0.92rem` | 500 | 1.0 | `0` | Action buttons, prominent call-to-action pills |
| `label-md` | Google Sans Flex | `0.8rem` | 500 | 1.2 | `0` | Tile metadata labels, small navigation chips |
| `label-sm` | Google Sans Flex | `0.72rem` | 500 | 1.2 | `0.04em` | Heatmap legend, timestamps, uppercase categories |
| `handwritten` | Caveat | `1.9rem` | 600 | 1.2 | `0` | Informal doodles and directional prompt arrows |

---

## Layout

The layout is built as an adaptive, fluid Bento grid that organizes disparate real-time feeds into an interconnected visual tapestry.

### Grid Architecture

- **Page Enclosure**: Fixed-max-width centered canvas constrained to `{spacing.max-width}` (`1180px`), with a 16px side gutter on mobile and 24px bottom buffer.
- **Bento Matrix**: A 4-column responsive grid on desktop with dense auto-placement:
  ```css
  .bento {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-flow: row dense;
    gap: 16px;
  }
  ```
- **Column & Row Spanning**:
  - `span-2`: Half-width widgets (Strava map, WakaTime code stats, Discord live card, Music player).
  - `span-3`: Wide feature shelves (Backloggd shelf, Movie collection marquee).
  - `span-4`: Full-width anchors (Hero introduction, GitHub year contributions, Guestbook).
  - `rows-2` / `rows-3`: Vertical anchors for tall photo stories and detailed activity telemetry.

### Responsive Breakpoints

1. **Desktop (> 1000px)**: Complete 4-column bento matrix; side-by-side guestbook form and message wall; multi-column social lists.
2. **Tablet (601px - 1000px)**: 2-column bento grid; all `span-2`, `span-3`, `span-4` elements automatically relax to span full width (`1 / -1`); `rows-*` height spans reset to `auto`.
3. **Mobile (<= 600px)**: Single-column vertical stream; full-width buttons; adaptive font clamps (`clamp(1.6rem, 3.4vw, 2.05rem)`); avatar shrink-to-fit (`min(220px, 56vw)`).

### Spacing Scale

The spacing rhythm strictly uses an 8px base grid with 4px micro-steps:
- `xs` (`4px`): Micro badge gaps, heatmap square spacing, icon-to-label separation.
- `sm` (`8px`): Action button clusters, chip gaps, small padding insets.
- `md` (`16px`): Bento grid row/column gap, standard card margins, dialogue gutters.
- `lg` (`24px`): Master card interior padding, modal dialog insets, section margins.
- `xl` (`32px`): Section separators, guestbook two-column split gap.
- `2xl` (`40px`): Hero section top/bottom padding.
- `3xl` (`48px`): Full-page landmark division padding.

---

## Elevation & Depth

Spatial hierarchy is achieved through Material 3 tonal layering, luminous ambient glows, and floating vinyl physics—eliminating muddy generic drop shadows.

### Surface Tonal Stepping

Components establish visual hierarchy by ascending the 6-tier surface scale:
1. Viewport Base: `surface` (`#1a110f`)
2. Base Cards: `surface-low` (`#231917`) sits directly on the viewport base.
3. Nested Tiles & Interactive Sub-Containers: `surface-high` (`#322825`) sits inside cards to form distinct clickable zones.
4. Active & Keyboard Components: `surface-highest` (`#3d3230`) provides immediate focal contrast.

### Ambient OKLab Glow

Cards do not use dark dropshadows to signal presence. Instead, a dynamic OKLab color-mix softly illuminates card edges from behind:
```css
background: color-mix(in oklab, var(--glow-c) calc(var(--glow-k) * 6%), var(--surface-low));
```
When hovering over cards, the glow subtly brightens, providing organic, atmospheric feedback.

### Overlays & Floating Dialogs

- **Transient Menus & Dialogs**: The Palette Picker and Keyboard Shortcuts overlay float with an elevated soft shadow:
  ```css
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
  ```
- **Floating Status Pills**: The hero `.now-guess` pill floats over the avatar base with a focused depth shadow:
  ```css
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
  ```
- **Vinyl Sticker Physics**: Guestbook stickers and mascot avatars use drop-shadow filters to emulate physical stickers peeled and stuck onto cards:
  ```css
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.35));
  ```

---

## Shapes

Shapes form the expressive heartbeat of the design system, combining rounded corner physics with mathematical cookie-cutter polygon clip-paths.

### Polygon Clip-Path Library

The interface uses 8 canonical clip-paths defined in `:root`:
- `--shape-circle`: 96-vertex smooth geometric circle.
- `--shape-cookie9`: 9-lobed scalloped cookie cutter (used on the loader and avatar backdrops).
- `--shape-cookie12`: 12-lobed scalloped cookie cutter (primary avatar shape).
- `--shape-flower8`: 8-petaled organic flower (avatar backdrop and loader morph).
- `--shape-clover4`: 4-leaf symmetrical clover badge.
- `--shape-burst10`: 10-pointed energetic starburst.
- `--shape-sunny8`: 8-ray sun gear.
- `--shape-soft6`: 6-sided soft curved hexagon.

```css
/* Expressive morph on card hover */
.shape-icon {
  clip-path: var(--shape-a);
  transition: clip-path 0.7s var(--spring), rotate 0.7s var(--spring);
}
.card:hover .shape-icon {
  clip-path: var(--shape-b);
  rotate: 24deg;
}
.card:hover .shape-icon .ms {
  rotate: -24deg;
}
```

### Corner Radius System (`rounded`)

- `none` (`0px`): Full-bleed banners, raw media video frames.
- `xs` (`4px`): Micro indicators, status dots, heatmap contribution squares.
- `sm` (`8px`): Tags, keyboard `<kbd>` caps, chip default corners.
- `md` (`12px`): Active buttons on tap, modal buttons, media covers.
- `lg` (`16px`): Chip hover states, small preview cards, dialogs.
- `xl` (`20px`): Interactive tiles, text inputs, guestbook note default radius.
- `2xl` (`28px`): Canonical container radius for all Bento cards.
- `3xl` (`36px`): Hover state for large interactive bento cards and mini tiles.
- `full` (`999px`): Action buttons, icon buttons, pill badges, now-guess pill.

### Kinetic Corner Morphing

Interactive elements change their corner radius upon user interaction:
- **Buttons**: Start as fully rounded pills (`999px`). When clicked or pressed (`:active`), they morph down to `12px` while scaling to `0.97` via `--spring`.
- **Icon Buttons**: Circle (`999px`) on idle, morphs to `14px` on active tap.
- **Chips**: `8px` on idle, blossoms outward to `16px` on `:hover`.
- **Tiles**: `20px` on idle, expands outward to `28px` on `:hover`.
- **Asymmetric Sticky Notes**: Guestbook notes employ intentional asymmetry (`border-radius: 20px 20px 20px 6px`) and an organic random tilt (`rotate: calc(var(--tilt, 0) * 1deg)`). On hover, they straighten to `0deg` and bloom to `26px`.

---

## Components

The design system implements a complete library of Material 3 Expressive UI components.

### 1. Action Buttons

- **Primary Button (`.btn.filled`)**:
  - Background: `{colors.primary}` (`#ffb4a1`)
  - Text: `{colors.on-primary}` (`#561f10`)
  - Typography: `{typography.label-lg}` (Google Sans Flex 500, `0.92rem`)
  - Height: `40px` | Padding: `0 20px 0 16px`
  - Radius: `{rounded.full}` (`999px`) on idle; morphs to `{rounded.md}` (`12px`) on `:active`.
  - Motion: `transition: border-radius 0.3s var(--spring), filter 0.2s, transform 0.2s var(--spring)`.
- **Secondary Button (`.btn`)**:
  - Background: `{colors.secondary-container}` (`#5d4038`)
  - Text: `{colors.on-secondary-container}` (`#ffdbd2`)
  - Hover: `filter: brightness(1.08)`.
- **Icon Action Button (`.icon-btn`)**:
  - Dimensions: `48px` x `48px` circle | Background: `{colors.surface-high}` (`#322825`)
  - Text: `{colors.on-surface}` (`#f1dfda`)
  - Active: Morphs to `14px` radius with `scale(0.94)`.

### 2. Bento Container Cards (`.card`)

- Background: `{colors.surface-low}` (`#231917`) infused with ambient glow.
- Corner Radius: `{rounded.2xl}` (`28px`).
- Padding: `{spacing.lg}` (`24px`).
- Hover Transition: Shape icon rotates `24deg` while its inner glyph counter-rotates `-24deg` to stay upright.

### 3. Interactive Tiles (`.tile` & `.mini`)

- Background: `{colors.surface-high}` (`#322825`).
- Corner Radius: `{rounded.xl}` (`20px`) on idle; blossoms to `{rounded.2xl}` (`28px`) on hover.
- Structure: Displays a colored Material Symbol, an uppercase label in `{typography.label-md}`, and a large metric value in `{typography.title-lg}`.

### 4. Interactive Chips (`.chip`)

- Background: Transparent with `1px solid {colors.outline-variant}` (`#53433f`).
- Text: `{colors.on-surface-variant}` (`#d8c2bc`).
- Height: `32px` | Corner Radius: `{rounded.sm}` (`8px`).
- Hover State: Expands corner radius to `{rounded.lg}` (`16px`) with light surface tint.
- Active/Selected State: Borderless `{colors.primary-container}` background with `{colors.on-primary-container}` text and pill radius (`999px`).

### 5. Media & Live Telemetry Components

- **Discord Live Activity Card**: Circular profile avatar with dynamic status indicator dot (`#23a55a` online, `#f0b232` idle, `#f23f43` dnd); Android-style squiggly waveform mask progress bar animation.
- **Audio Waveform Player (`.lf-wave`)**: Live vector path that oscillates as an active soundwave during preview playback, easing down to a flat straight line on pause and springing back up on resume.
- **GitHub Contribution Matrix**: 52-column calendar grid with 4 intensity tiers (`l1` to `l4`) dynamically color-mixed using `{colors.primary}`, accompanied by 12 monthly contribution bars.
- **Strava Walk Map**: High-contrast vector path with animated stroke dash-offset drawing animation and primary color glow drop-shadow.

### 6. Guestbook Sticky Notes (`.guest-note`)

- Shape: Asymmetric `{rounded.xl}` corner cut (`20px 20px 20px 6px`).
- Organic Rotation: Random tilt between -2deg and +2deg (`rotate: calc(var(--tilt, 0) * 1deg)`).
- 3n Color Harmonization:
  - 1st note (`3n + 1`): `{colors.primary-container}` background / `{colors.on-primary-container}` text.
  - 2nd note (`3n + 2`): `{colors.secondary-container}` background / `{colors.on-secondary-container}` text.
  - 3rd note (`3n`): `{colors.tertiary-container}` background / `{colors.on-tertiary-container}` text.
- Sticker Accent: Corner vinyl sticker rotated at 9 degrees with realistic shadow.
- Hover Interaction: Straightens to `0deg`, blooms corner radius to `26px`, and scales to `1.03`.

### 7. Form Controls & Dialogs

- **Textarea & Inputs**: `{colors.surface-high}` background, `1px solid {colors.outline-variant}`, `{rounded.xl}` (`20px`) border-radius. On focus, outline blooms to `26px` radius with `{colors.primary}` border.
- **Keyboard Shortcut Dialog (`.keys-dialog`)**: Centered modal with `{rounded.2xl}` (`28px`) corners, `{colors.surface-high}` background, and tactile `<kbd>` keys.
- **Keyboard Tag (`<kbd>`)**: `{colors.surface-highest}` (`#3d3230`) fill, inset 3px bottom bevel shadow, Google Sans Flex 600.

---

## Do's and Don'ts

### Do's

- **Do** anchor interfaces to the primary Coral seed (`#ffb4a1` / `#8f4b39`) and reference semantic M3 roles (`primary`, `primary-container`, `surface-high`) rather than hardcoding arbitrary hex codes.
- **Do** use `Google Sans Flex` for interface typography, `Caveat` for cursive annotations, and `Docallisme` exclusively for the personal name signature.
- **Do** respect the two canonical timing curves: `--spring` (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for lively interactive morphs and `--ease` (`cubic-bezier(0.2, 0, 0, 1)`) for subtle color fades.
- **Do** implement kinetic corner-radius morphing on interactive components (e.g. buttons morph from `999px` to `12px` on click; chips morph from `8px` to `16px` on hover).
- **Do** enforce a minimum 4.5:1 contrast ratio (WCAG AA) on all text and ink pairings, striving for 7:1 (WCAG AAA) where achievable.
- **Do** utilize the 8 predefined cookie-cutter polygon clip-paths for expressive avatar badges, icon containers, and interactive loader transitions.
- **Do** construct bento cards with `{rounded.2xl}` (`28px`) corner radius to preserve the signature silhouette.

### Don'ts

- **Don't** introduce generic utilitarian typefaces such as Inter, Roboto, Arial, or Poppins that dilute the Material 3 Expressive character.
- **Don't** use sharp 0px corners on buttons, cards, tiles, or dialogs.
- **Don't** apply heavy, opaque black drop shadows (`box-shadow: 0 10px 30px #000`) to flat cards; build spatial depth using the 6-tier surface tonal scale.
- **Don't** create static hover transitions that only swap color—every hover or tap must engage physical scale or corner-radius morphing.
- **Don't** hardcode external third-party brand hex colors across global elements; isolate brand accents strictly to their dedicated integration cards.
- **Don't** clutter the screen with more than two font weights on a single card component.
