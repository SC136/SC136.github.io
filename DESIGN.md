---
version: alpha
name: sc.is-a.dev
description: >
  Swar Churi's "right now" page (the "more" page to swar.is-a.dev). One long
  Material 3 Expressive bento of live cards (music, shows, code, games, walks,
  languages, guestbook) under a real Mumbai sky. Tokens below are the coral
  scheme in dark theme; light values and the other palettes are in the prose.
colors:
  seed: "#e79a86"
  primary: "#ffb4a1"
  on-primary: "#561f10"
  primary-container: "#723524"
  on-primary-container: "#ffdbd2"
  secondary-container: "#5d4038"
  on-secondary-container: "#ffdbd2"
  tertiary: "#d9c58d"
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
typography:
  body:
    fontFamily: "Google Sans Flex, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  name:
    fontFamily: "Docallisme, Google Sans Flex"
    fontSize: 1.45em
    fontWeight: 400
    letterSpacing: 0.02em
  hand:
    fontFamily: "Caveat, cursive"
    fontSize: 1.9rem
    fontWeight: 600
  intro-title:
    fontFamily: "Google Sans Flex"
    fontSize: "clamp(2rem, 5vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.1
  big-number:
    fontFamily: "Google Sans Flex"
    fontSize: "clamp(2.4rem, 5vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
  card-title:
    fontFamily: "Google Sans Flex"
    fontSize: "clamp(1.6rem, 3.4vw, 2.05rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
  tile-value:
    fontFamily: "Google Sans Flex"
    fontSize: 1.55rem
    fontWeight: 500
    lineHeight: 1.2
  stat-value:
    fontFamily: "Google Sans Flex"
    fontSize: 1.3rem
    fontWeight: 600
  row-title:
    fontFamily: "Google Sans Flex"
    fontSize: 1rem
    fontWeight: 500
  button:
    fontFamily: "Google Sans Flex"
    fontSize: 0.92rem
    fontWeight: 500
    lineHeight: 1
  subhead:
    fontFamily: "Google Sans Flex"
    fontSize: 0.85rem
    fontWeight: 600
    letterSpacing: 0.06em
    textTransform: uppercase
  label:
    fontFamily: "Google Sans Flex"
    fontSize: 0.8rem
    fontWeight: 400
  sub:
    fontFamily: "Google Sans Flex"
    fontSize: 0.82rem
    fontWeight: 400
  caption:
    fontFamily: "Google Sans Flex"
    fontSize: 0.72rem
    fontWeight: 400
  icon:
    fontFamily: "Material Symbols Rounded"
    fontSize: 24px
    fontVariation: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24'
rounded:
  pill: 999px
  card: 28px
  card-phone: 24px
  mini-hover: 36px
  panel: 24px
  panel-hover: 34px
  dialog: 28px
  palette-menu: 24px
  surface-inner: 20px
  tooltip: 18px
  spec: 18px
  stat: 16px
  menu: 16px
  row-lead: 12px
  poster: 12px
  poster-hover: 20px
  kbd: 10px
  chip: 8px
  chip-hover: 16px
  row: 4px
  row-end: 18px
spacing:
  page-max: 1180px
  gutter: 16px
  bento-gap: 16px
  card-pad: 24px
  card-pad-phone: 20px
  mini-pad: 20px
  panel-pad: 20px 22px
  stack: 16px
  chip-gap: 8px
  list-gap: 2px
components:
  card:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  card-mini:
    backgroundColor: "{colors.surface-low}"
    rounded: "{rounded.card}"
    padding: "{spacing.mini-pad}"
  inner-panel:
    backgroundColor: "color-mix(in srgb, {colors.surface-lowest} 55%, transparent)"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-pad}"
  shape-icon:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    size: 52px
  shape-icon-tonal:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  shape-icon-gold:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
  button:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: 40px
  button-filled:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    height: 40px
  icon-button:
    backgroundColor: "{colors.surface-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pill}"
    size: 48px
  chip:
    backgroundColor: transparent
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.chip}"
    height: 32px
  list-row:
    backgroundColor: "{colors.surface-high}"
    rounded: "{rounded.row}"
    height: 64px
  list-row-lead:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.row-lead}"
    size: 40px
  stat:
    backgroundColor: "{colors.surface-high}"
    rounded: "{rounded.stat}"
    padding: 10px 16px
  segmented-button:
    borderColor: "{colors.outline}"
    rounded: "{rounded.pill}"
    height: 40px
  segmented-button-selected:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  poster:
    backgroundColor: "{colors.surface-high}"
    rounded: "{rounded.poster}"
  rich-tooltip:
    backgroundColor: "{colors.surface-highest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.tooltip}"
    width: 280px
  dialog:
    backgroundColor: "{colors.surface-high}"
    rounded: "{rounded.dialog}"
    padding: 24px
  palette-menu:
    backgroundColor: "{colors.surface-high}"
    rounded: "{rounded.palette-menu}"
    width: 330px
  since-strip:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.pill}"
  now-guess:
    backgroundColor: "{colors.surface-high}"
    rounded: "{rounded.pill}"
  text-field:
    backgroundColor: "{colors.surface-high}"
    borderColor: "{colors.outline-variant}"
    rounded: "{rounded.surface-inner}"
  text-field-focus:
    borderColor: "{colors.primary}"
    rounded: 26px
  kbd:
    backgroundColor: "{colors.surface-highest}"
    rounded: "{rounded.kbd}"
    height: 32px
  footer:
    backgroundColor: "{colors.surface-low}"
    rounded: "28px 28px 0 0"
---

# sc.is-a.dev design guide

## What this page is

sc.is-a.dev is the "more" page to Swar's portfolio at swar.is-a.dev. It answers one question: what is Swar up to right now? The answer is a single `index.html`. The parts are a live sky over Mumbai, an avatar that morphs into a different shape on each tap, a guess line under the avatar, and a 4-column bento of cards that each read one real source (Discord, Last.fm, AniList, Letterboxd, Steam, WakaTime, GitHub, Strava, Duolingo, Backloggd, a guestbook). It is written in Swar's voice, lowercase and first person. It isn't a CV.

There is no build step. CSS, markup and JS all live in `index.html`, and sections are marked with comments like `/* ---------- listening ---------- */`, `BENTO:` and `LOADER:`. Search for those comments to find things. Line numbers move too often to rely on.

### Principles

1. **Strict Material 3 Expressive.** Use tonal surfaces, cookie-cutter shapes, spring motion and corners that change on interaction. No glassmorphism, no frosted blur panels, no liquid glass. *Why:* glass is the visual language of swar.is-a.dev. Keeping this site pure M3 is what makes it a separate place. A glass-tinted context menu was tried here and rejected outright, and the whole right-click menu was later removed.
2. **Real data, or nothing.** The sky follows the sunrise equation for Mumbai, the moon is computed from an ephemeris, the clouds come from Open-Meteo, and the guess comes from Discord, Last.fm and GitHub. If a number is copied by hand (Strava, the Letterboxd totals), the card says so. *Why:* the whole point of the page is "right now". One fake detail makes every other detail suspect.
3. **Specific beats generic.** An indicator should look like the thing it reports on. The Discord dot uses Discord's own status colours, and progress is drawn as Android's squiggle. *Why:* a pulsing green "live" dot was rejected because it looked AI generated. Generic decoration reads as a template.
4. **State changes animate, they never snap.** The squiggle eases down to flat on pause and back up on play. Themes grow out of the button as a circle. The avatar springs between shapes. *Why:* a snap reads as a glitch, and motion is how the page shows that something changed.
5. **Rows are balanced.** Cards in a row end level, with no dead space inside or beside them. When one card is taller, fix it by giving the shorter card real content, never padding. *Why:* a bento with holes looks unfinished, and padding is a hole wearing a disguise.
6. **Original, page-specific ideas.** Each card's flourish is about its own data, like the shape of the walk or a note stuck on crooked. Don't copy a section from somewhere else, and don't put ASCII decorations next to big type. *Why:* the owner wants the page to feel made for him, not assembled.
7. **Quiet atmosphere.** Stars don't twinkle. Every sky layer is scaled down by `--sky-k`, `--cloud-k` or `--glow-a`, and fades take 2 to 3 seconds. *Why:* the cards are the content and the sky is a backdrop.

## Colour

### Roles

Every colour role is defined under `[data-theme="dark"]` and `[data-theme="light"]`. `:root` holds only shapes and easings. Each scheme has exactly 19 roles: `--primary`, `--on-primary`, `--primary-container`, `--on-primary-container`, `--secondary-container`, `--on-secondary-container`, `--tertiary`, `--tertiary-container`, `--on-tertiary-container`, `--surface`, `--surface-lowest`, `--surface-low`, `--surface-container`, `--surface-high`, `--surface-highest`, `--on-surface`, `--on-surface-variant`, `--outline`, `--outline-variant`.

**Rule: only reference a role from that list.** These do not exist: `--secondary`, `--on-secondary`, `--on-tertiary`, `--error`, `--surface-dim`, `--surface-bright`, `--inverse-*`, `--surface-container-high`, `--surface-container-highest`. *Why:* an undefined `var()` fails silently. A menu once read `--surface-container-high` and came out transparent. If a role is missing, add it to every palette rule, or use a role that already exists.

### Surface ladder

| Layer | Role | Used by |
|---|---|---|
| Page | `--surface` | `body`, loader |
| Card | `--surface-low` (mixed with the glow) | `.card`, `.footer` |
| Inside a card | `--surface-high` | `.row`, `.stat`, `.lastfm`, `.poster`, `.spec`, guest inputs, `.icon-btn`, `.now-guess` |
| Inner panel | `--surface-lowest` at 55% | `.strava-latest`, `.duo-focus`, `.played-favs` |
| Floating | `--surface-highest` | `.rich-tip`, `kbd`, `.snap-frame` |
| Dialogs and menus | `--surface-high` | `.keys-dialog`, `.palette-menu` |

Hover tints come from mixing on-surface into the base: `color-mix(in srgb, var(--on-surface) 5–10%, <base or transparent>)`. Don't invent a new grey.

### Coral, dark and light

Coral is the base scheme, a Tonal Spot generated from `#e79a86`. It is the bare `[data-theme]` rule with no `data-palette` attribute. The dark values are in the front matter. The light values are:

`--primary #8f4b39`, `--on-primary #ffffff`, `--primary-container #ffdbd2`, `--on-primary-container #723524`, `--secondary-container #ffdbd2`, `--on-secondary-container #5d4038`, `--tertiary #6c5d2e`, `--tertiary-container #f7e1a6`, `--on-tertiary-container #534519`, `--surface #fff8f6`, `--surface-lowest #ffffff`, `--surface-low #fff1ed`, `--surface-container #fceae6`, `--surface-high #f7e4e0`, `--surface-highest #f1dfda`, `--on-surface #231917`, `--on-surface-variant #53433f`, `--outline #85736f`, `--outline-variant #d8c2bc`.

The theme is chosen before first paint by the head script. It uses the saved `localStorage.theme` if there is one, otherwise the system's `prefers-color-scheme`. Dark is only the fallback when neither is available. Toggle with `T` or the theme button.

### Palettes

**Rule: a random palette on every visit, never the same one twice in a row.** The head script picks from `['default','coral','pink','lavender','teal','mint','sand','lime']`, leaving out the last pick stored in `sc136-palette`. The theme persists between visits; the palette deliberately does not.

Each palette is a full M3 scheme generated from one seed, written as two one-line rules (`[data-palette="x"][data-theme="dark|light"] { …all 19 roles… }`). They are Tonal Spot, except lime, which uses the Content scheme to keep its punch, so its containers are vivid (`#b6e01e` in both themes).

| Palette | Primary dark | Primary light | Dark surface |
|---|---|---|---|
| coral | `#ffb4a1` | `#8f4b39` | `#1a110f` |
| lavender | `#c3c0ff` | `#5a5892` | `#131318` |
| teal | `#80d4db` | `#00696f` | `#0e1415` |
| mint | `#95d5a7` | `#2d6a45` | `#101510` |
| sand | `#e5c36c` | `#745b0b` | `#16130b` |
| pink | `#feb0d1` | `#894a67` | `#191114` |
| lime | `#d1fd40` | `#516600` | `#121409` |

**music** is outside the random pool. It seeds a Tonal Spot scheme in the browser from the current Last.fm cover (`material-color-utilities` with `QuantizerCelebi` and `Score`), writes the 19 roles as inline styles on `<html>`, and re-seeds when the track changes. Until a cover arrives, its swatch is a conic swirl of the current colours.

When you add a palette: generate it from one seed and **write the seed in a comment** (only coral's is recorded today). Add the two role rules, add the `--sw-a/b/c` swatch stops (primary, secondary, tertiary, per theme), add a `.swatch-btn`, and add the name to the head-script array.

### Default: brand mode

"default" is not a Material scheme. The page goes neutral (dark surface `#151313` with on-surface `#e8e1e1`; light surface `#fff8f8` with on-surface `#1e1b1b`). Each card then wears the colours of its data source. A `[data-palette="default"][data-theme] [data-brand="x"]` rule re-scopes the same role names to that brand's Content-scheme set (tertiary equals primary). Components never need to know which brand they are in. *Why:* it keeps buttons, chips and charts readable in every brand.

| `data-brand` | Brand | Primary dark / light | Container |
|---|---|---|---|
| discord | `#5865f2` | `#bec2ff` / `#3d4ad8` | `#5865f2` |
| lastfm | `#d51007` | `#ffb4a8` / `#a90100` | `#d51007` |
| spotify | `#1ed760` | `#4cf479` / `#006e2c` | `#1ed760` |
| anilist | `#02a9ff` | `#94ccff` / `#006398` | `#02a9ff` |
| letterboxd | `#ff8000` | `#ffb787` / `#964900` | `#ff8000` |
| steam | `#66c0f4` | `#a1d9ff` / `#00658d` | `#66c0f4` |
| wakatime | `#3b82f6` | `#adc6ff` / `#0058be` | `#4d8eff` / `#2170e4` |
| github | `#2da44e` | `#6bde80` / `#006b2a` | `#2fa54f` / `#008737` |
| duolingo | `#58cc02` | `#74e930` / `#2b6c00` | `#58cc02` |
| strava | `#fc4c02` | `#ffb59f` / `#aa3000` | `#ff571b` / `#d53e00` |
| backloggd | `#fc6399` | `#ffb1c6` / `#af255e` | `#fc6399` |
| sc | (no rule, inherits the page) | | |

In brand cards, the `.shape-icon` wears the brand container (`--primary-container` / `--on-primary-container`), because icons should carry the brand itself, not a pastel of it. Each card's "own hover wash" is the glow, described next, tinted with that brand's `BRAND_GLOW` colour. There is no separate `:hover` colour rule per brand.

### The glow

`.glow` is a fixed layer at z -1: a radial gradient of `max(36vmax, 440px)` around the pointer, plus a flat wash at 20% of `--glow-a` (30% in dark, 36% in light). Cards pick it up through `background: color-mix(in oklab, var(--glow-c) calc(var(--glow-k) * 6%), var(--surface-low))`.

- The colour is `el.dataset.glow || BRAND_GLOW[el.dataset.brand]`, taken from the nearest `[data-glow]`. In default mode the enclosing `[data-brand]` card counts too, and an inner `data-glow` still wins, so a poster keeps its own colour inside a card.
- It follows `pointerover` (not touch) and `focusin`. Leaving starts a 160 ms grace period so moving between neighbours doesn't flicker. Within 700 ms of idle, a new glow slides over; after that it jumps to the new place.
- `--glow-c`, `--glow-k`, `--glow-x` and `--glow-y` are registered with `@property` so they can animate.
- To give something its own colour, put `data-glow="#hex"` on it. Don't add per-card hover CSS.

### Contrast rules

- Text sits on its role pair: `on-primary` on `primary`, `on-*-container` on `*-container`, `on-surface` or `on-surface-variant` on any surface. Never put `--primary` text on `--primary-container`.
- White text on photos always gets a scrim: `.t-game::before` (to `rgba(0,0,0,.8)`), `.poster-tag` (`.65`), `.game-chip` (`.45`), and the black-to-transparent gradient on the server banner.
- New brand colours go through a generated role set, never a raw hex on a surface.
- The favicon lifts any colour whose luminance is under 140 so it reads on both light and dark browser tabs.

## Type, icons, shapes, motion

### Type

Three families, each with one job:

- **Google Sans Flex** (400/500/600) for everything. Weight 700 is loaded but unused; drop it from the font URL rather than starting to use it.
- **Docallisme** (local `assets/fonts/docallismeonstreet.otf`) only for the name: `.intro h1 .name` and the footer `.wordmark b`. It also appears in the snapshot canvas.
- **Caveat** only for the hand-written "tap me!" next to the avatar.

The ramp in use (there is no token scale; reuse these values, don't add near-duplicates):

| Role | Size / weight | Where |
|---|---|---|
| Big number | `clamp(2.4rem,5vw,3.4rem)` / 600, -0.02em | `.strava-big`, `.duo-big` (clamp 2–2.6rem) |
| Intro | `clamp(2rem,5vw,2.6rem)` / 500 | `.intro h1` |
| Card title | `clamp(1.6rem,3.4vw,2.05rem)` / 500, -0.01em | `.card-title` |
| Spec value | 1.9rem / 600 | `.spec b` |
| Tile value | 1.55rem / 500 (1.75rem in `.mini`) | `.tile-value` |
| Stat value | 1.3rem / 600 | `.stat b` |
| Item title | 1–1.05rem / 500–600 | `.row-title`, `.lf-title`, `.tip-title` |
| Body | 0.92–0.95rem | `.btn`, `.pinned`, `.now-guess`, guest inputs |
| Subhead | 0.85rem / 600, 0.06em, uppercase | `.subhead`, `.palette-title` (0.8rem) |
| Label / sub | 0.8 / 0.82rem, `--on-surface-variant` | `.tile-label`, `.tile-sub`, `.row-sub` |
| Caption | 0.72–0.78rem | `.stat span`, `.tip-meta`, chart axes |

Single-line values truncate with `overflow:hidden; text-overflow:ellipsis; white-space:nowrap` and `min-width:0` on the flex child. Use `font: inherit` on new form controls instead of restating the family.

### Icons

- **Material Symbols Rounded** through `.ms`: 24px, FILL 0, wght 400, opsz 24. Inline icons sit at 16 to 20px in `--primary`.
- The font is loaded as a **subset** with `icon_names=` (about 27 KB instead of 540 KB). **Add the name to the URL whenever you use a new icon**, or it renders as the literal word.
- `hideIconWords` sets `aria-hidden` on every `.ms`, including injected ones, so screen readers don't read "open_in_new".
- **Font Awesome 6.5.1 brands only**, for platform logos. No `fa-solid`.
- No emoji in UI chrome. The guestbook moods are the only emoji on the page.

### Shapes

`:root` holds eight 96-point `polygon()` clip-paths: `--shape-circle`, `--shape-cookie9`, `--shape-cookie12`, `--shape-flower8`, `--shape-clover4`, `--shape-burst10`, `--shape-sunny8` and `--shape-soft6`. Every one has the same point count and starts at the same angle, which is what lets `clip-path` morph between any two of them. A new shape must follow the same rule: 96 points, starting at (100%, 50%).

They are used by:

- **`.shape-icon`** at the top of every card. It morphs from `--shape-a` to `--shape-b` and turns 24° on card hover, with the glyph counter-rotated so it stays upright. The pair is set inline per card. Choose a pair not used by the cards next to it. Tones: plain (`--primary`), `.tonal` (`--primary-container`), `.gold` (`--tertiary-container`). `.sm` is 40px.
- **The avatar.** It steps through `SHAPES = [cookie12, flower8, clover4, burst10, sunny8, cookie9, soft6]`. The backdrop takes the shape three steps ahead and turns -22.5° per tap. The two cutters spin slowly in opposite directions (60s and 45s) while the photo counter-spins and stays upright.
- **The loader**, which morphs cookie9, flower8, clover4, burst10, sunny8 and back over 3.6s.
- **Swatches**: a circle at rest, `soft6` on hover, `cookie9` plus 24° when selected.

### Corners: the two directions

- **Round controls tighten when pressed or active:** `.btn` 999→12px, `.icon-btn` →14px, `.lf-play` 50%→16px while playing, `.guest-chip` →12px, `.since-x` →12px, footer icons 24→15px. Footer icons store half their size instead of 999, so the change interpolates smoothly.
- **Rounded containers round further on hover** by about 8px: `.chip` 8→16, `.row` 4→18, `.poster` 12→20, `a.mini` 28→36, `.spec` 18→26, `.lf-art` 14→26, inner panels 24→34 (driven by hover on the parent card), guest inputs 20→26 on focus.

Interaction is shown with shape and tint, not elevation. Cards never lift.

### Easing and durations

- `--ease: cubic-bezier(0.2, 0, 0, 1)` for opacity, colour and radius.
- `--spring: cubic-bezier(0.34, 1.56, 0.64, 1)` for scale, rotate, clip-path and anything playful.

| Use | Recipe |
|---|---|
| Popover in/out | `opacity .15s var(--ease)`, `scale .3–.35s var(--spring)` from 0.9–0.94, `visibility 0s .35s` on close |
| Surface radius | `border-radius .35s var(--ease)` |
| Pill radius | `border-radius .3s var(--spring)` |
| Shape morph | `clip-path .7s var(--spring)` (backdrop .9s) |
| Card rise-in | `opacity .6s var(--ease)`, `translate .7s var(--spring)` from 28px down, 70 ms stagger |
| Theme / palette | 650 ms circular view transition growing from the button (`sweep()`) |
| Sky fades | 2–3s; moon glide 16s linear; clouds 150–270s |

Use the individual `translate` / `scale` / `rotate` properties so they stack. Write a `transition` on the base state so changes animate in both directions.

**Image swap recipe** (avatar, mascot): add `.is-swapping` (shrink and fade over .15–.18s), change `src`, `await decode()`, remove the class so the new image springs in.

### Reduced motion

The global block cuts every transition and animation to 0.01ms. On top of that:

- Cards appear at once, and the loader, spins and drift stop.
- Clouds pause where they are, while rain and lightning are hidden.
- The squiggle and the Last.fm wave stay flat, and the Strava route is drawn already.
- Hover video and the animated server art are skipped.
- `html` keeps a 0.4s colour fade, so colours still fade but the glow doesn't travel.

In JS, check `reduceMotion` before starting anything that moves. Exempt properties from the global rule with `!important`, otherwise the 0.01ms wins.

## Layout

- `.page`: `max-width: 1180px`, centred, 16px side gutter. The footer matches that width.
- Order: loader, `.sky`, `.glow`, `header.topbar` (snapshot, palette and theme buttons; it scrolls away so it never covers a card), then `main.page` containing the `.hero`, the `.card.intro` (outside the bento), the `aside.since` strip, and the `.bento`. Then the footer, followed by the tooltip and dialog nodes.
- `.bento`: `grid-template-columns: repeat(4, minmax(0,1fr))`, `gap: 16px`, `grid-auto-flow: row dense`. Spans: `.span-2`, `.span-4`, `.rows-2`. `.span-3`, `.rows-3` and `.wide-xs` exist in CSS but nothing uses them.

### Breakpoints

| Width | Change |
|---|---|
| ≤1000px | Bento goes to 2 columns. Every `.span-*` goes full width, `.rows-*` reset. The time and weather minis share a row. |
| ≤800px | Guestbook goes to one column. |
| ≤720px | Card padding 20px, radius 24px. Mascot shrinks below the intro. Posters go to 4 per row, 12 at most. |
| ≥721px | `.t-find` rows go into 2 columns. |
| ≤600px | Stats go two by two. Avatar hint moves. Server banner wraps. GitHub chart shows 182 days (JS). |
| ≤460 / ≤420px | Strava panel stacks; specs go to 2 columns. |

JS uses `< 600` and `max-width: 599px` where CSS uses `max-width: 600px`. Match the CSS when adding new breakpoints.

### Rows today (4 columns)

| Row | Left (cols 1–2) | Right (cols 3–4) |
|---|---|---|
| 1 | time mini, weather mini | Discord (span-2) |
| 2 | listening (Last.fm) | watching (AniList/Letterboxd, rows-2) |
| 3 | Steam game | (watching) |
| 4 | how i code (WakaTime, rows-2) | what i've made |
| 5 | (code) | latest push mini |
| 6 | toolbox | setup (rows-2) |
| 7 | by the numbers | (setup) |
| 8 | my year on github | on the move (Strava) |
| 9 | daily language (Duolingo) | games i've played (Backloggd) |
| 10 | this week in numbers | today, so far |
| 11–13 | Discord server, guestbook, where to find me (all span-4) | |

The tall cards zig-zag right, left, right. Visual order equals DOM order equals tab order. Keep it that way: `dense` must never be what fills a hole.

### Balancing a row

- Every row adds up to 4 columns. A lone `span-2` leaves a hole, and `dense` would fill it by pulling a later card up, which breaks the reading order.
- A `rows-2` card needs two `span-2` partners stacked on its other side.
- Grid rows stretch, so the shorter card gets taller. Make the stretch look intended: pin the bottom block with `margin-top: auto` (`.card-actions` in Duolingo and Backloggd, `.strava-latest` in Strava).
- If the shorter card still has empty space, **give it real content**: a stats row, a shelf of posters, a focus panel. That is how Backloggd got its 4-poster `.played-favs` shelf next to Duolingo. Never pad.
- Add 1-column minis in pairs, so the 2-column layout stays even.

### Stacking

| Layer | z-index |
|---|---|
| `.glow` | -1 (fixed) |
| `.sky` | 5 (`pointer-events: none`; only the moon and the ISS take pointer events). It has to be above the page's plain content: a z-index of -1 looks right but the body then catches every pointer event and nothing in the sky can be hovered |
| `.hero-backdrop` / `.avatar-btn` | 6 / 7 (the hero itself makes no layer, so the spinning shape can tuck behind the intro card; `pointer-events: none` on the hero, `auto` on its children, so the moon and ISS behind it can be hovered) |
| `.card` | 10 |
| `.now-guess` | 11 (hangs over the top of the intro card) |
| `.topbar` / `.palette-menu` | 20 / 30 |
| `.rich-tip` | 60 |
| `.keys-dialog`, `.snap-dialog` | 70 |
| `.loader` | 100 |

Overlay containers set `pointer-events: none` and turn it back on for their interactive children. Copy that pattern for any new overlay.

## Atmosphere

Everything here is computed from Mumbai (`LAT 19.4654`, `LON 72.8086`) and real time. Nothing is decorative noise.

- **Sky.** `paintSky()` writes four weights (`--night`, `--dawn`, `--day`, `--dusk`, each 0–1) on `#sky` from the sunrise equation. Dawn ramps from 75 minutes before sunrise, day starts 30 minutes after, dusk starts 90 minutes before sunset, night starts 15 minutes after. Each `.sky-tint` layer mixes its theme colours (`--sky-*`, `--hz-*`) into `--primary-container`, so the sky is also re-tinted by the colour theme. **JS writes numbers, CSS mixes colours.** New layers must follow that split. The sky repaints every 15s.
- **Drift.** Three blurred colour bands drift over 48 to 62s. They replaced an earlier aurora behind the avatar.
- **Stars.** 60 stars, seeded (`seed = 136`) so they sit in the same place on every visit, with every 10th one a sparkle. They are visible only at night, never twinkle, and clouds cover them.
- **Moon.** Its phase and position come from an ephemeris. It is kept at least 24% away from the centre so it never sits on the avatar. It fades in over the horizon, paler by day and dimmer under overcast. It is one of two interactive parts of the sky, with the ISS. Its tooltip shows the name, the % lit, and moonrise and moonset in IST ("no moonrise today" on the days it skips). The sky's decorative layers are `aria-hidden`; the moon is not, because it is a control.
- **Weather.** Open-Meteo is polled every 20 minutes. WMO codes map to clouds (seeded), an overcast veil, rain at three densities slanted along their own 12°, and lightning flashes every 7 to 21s, only in storms. Clouds catch the horizon colour at dawn and dusk.
- **The ISS.** On a night visit a small 3D model of the station flies across the sky: a truss, four solar arrays that turn on it, and white modules, all built from CSS boxes in 3D (about 60 elements, scaled to 64px wide) and tumbling slowly as it goes. The first pass starts 14 to 22 seconds after the page shows, then another every four to six minutes while it stays open, and there is never more than one in the sky. A pass takes 90 to 140 seconds, left to right or right to left, on a slight slope. Like the shooting stars it is decoration, not real data. The tooltip is the real part: the station's position right now from api.wheretheiss.at, its height and speed, and a few facts. It sits behind clouds and is skipped in heavy cloud, by day and with reduced motion. It is the second thing in the sky you can hover.
- **Shooting stars.** The one thing in the sky that is not real data, on purpose: a visitor at night sees one within a few seconds, then about two a minute on a clear night, fewer at dusk and dawn, hardly any under cloud, none by day. They sit behind the clouds like the stars. Keep them rare and keep them the only decoration; don't add comets, sparkles or anything else that moves for no reason.
- **Previews.** Use `?sky=clear|cloudy|overcast|fog|drizzle|rain|storm`, `?moon=0..1` and `?meteors` (a meteor storm, any time of day) and `?iss` (the ISS flying quick passes, one after another) to see any state. Live data never overrides a preview. Any new real-data visual gets a preview parameter like these.
- **Now guess.** The pill under the avatar works out a sentence from Discord, Last.fm, GitHub and the clock. Priority: editor, github, creative app, watching, game, song, a push in the last 45 minutes, dnd/online/idle, asleep between 1 and 8am, offline. Rain adds a suffix: "in the drizzle", "while it rains", "through a thunderstorm". It re-polls every 30s and repaints only when the text changes.
- **Tab title.** It follows the guess (`▶ song · Swar`, `coding · Swar`, `zzz · Swar`). The base title is `Swar Churi · right now`.
- **Favicon.** `SC.png` is recoloured on a canvas: the glow colour, otherwise `--primary`, lifted if it is too dark for a dark tab.

**Restraint rules.** Two interactive things in the sky, the moon and the ISS. No twinkle, no particles that aren't weather, apart from the odd shooting star. Every layer is scaled by a per-theme multiplier (`--sky-k` is .6 dark and .75 light, `--cloud-k` is .75 and 1). Under reduced motion the weather freezes but the colours stay correct.

## Components

All components take their colours from role tokens, so they work in every palette and every brand card.

**Card** (`.card`). `--surface-low` mixed with the glow, radius 28 (24 on phones), padding 24 (20), `overflow: hidden`, rises in on scroll. Anatomy: `.shape-icon`, `h2.card-title`, body, optional `.card-actions` (right-aligned). A static card is a `<section aria-labelledby>`. A card that links out is an `<a class="card">` with `target="_blank" rel="noopener noreferrer"`.

**Mini** (`.card.mini`). Padding 20. `.mini-head` holds a `.shape-icon.sm.tonal` and a `.tile-label`, then come a `.tile-value` (1.75rem) and a `.tile-sub`. `a.mini:hover` rounds to 36 and tints the background by 5%. A link mini must repeat the rise-in transition next to its hover transition (see `.js a.mini`).

**Inner panel** (`.strava-latest`, `.duo-focus`, `.played-favs`). `--surface-lowest` at 55%, radius 24, rounding to 34 on card hover. A head row holds a `.tile-label` with an 18px primary icon and a pill on the right. Use it for the "featured item" inside a card.

**Buttons.** `.btn` is tonal (`--secondary-container`), 40px tall, a pill that tightens to 12px and scales to .97 when pressed. `.btn.filled` uses `--primary`. `.icon-btn` is 48px on `--surface-high` and goes to 14px and .94 when pressed. Brand names on buttons are capitalised ("AniList"). Other button text is lowercase or a single word ("Contact").

**Chips.** `.chip` is outlined (`--outline-variant`), 32px tall, radius 8 rounding to 16 on hover. It is static and has no selected state. Selectable chips are `.guest-chip` with `aria-pressed`, and the selected one becomes `--primary-container`.

**Segmented list** (`.list > li > a.row`). Rows are 64px tall on `--surface-high` with 2px between them. Inner corners are 4px and the group's outer corners 18px, and a hovered row rounds fully. Anatomy: `.row-lead` (40px, `--primary-container`), `.row-text` (`.row-title`, `.row-sub`), and `.row-trail` with `open_in_new`. In `.t-find` on wide screens the rows sit in 2 columns with uniform 12/20 corners.

**Segmented button** (`.seg`). Outlined pill. The selected half gets `--secondary-container` and a check icon that grows from 0 to 18px width. It toggles `aria-pressed` and the panels' `hidden`, and in the watch card it also switches `data-brand` between anilist and letterboxd.

**Stats** (`.stats > .stat`). Each stat is a `<b>` value and a `<span>` label on `--surface-high`, radius 16. On phones they sit two by two, and an odd last one spans the full row.

**Posters** (`.posters`, `.poster`). 2:3, radius 12 rounding to 20 and scaling to 1.05 on hover or focus. The loading state is `.poster.skeleton`, a 12% primary tint. `.poster-tag` is a dark pill for the episode or rating. Every poster carries `data-glow` and a tooltip.

**Rich tooltip** (`.rich-tip`, one shared node). 280px, `--surface-highest`, radius 18, opens with the popover recipe from the side of the target (12px gap), flips when it doesn't fit, and goes underneath for `.row` targets. Parts: `.tip-banner` (104px, bleeding to the edges and fading into the surface; modifiers `.is-cover`, `.top`, `.full`, `.brand`), `.tip-head` (36px badge overlapping the banner), `.tip-title`, `.tip-meta`, `.tip-body`, `.tip-line` (16px primary icon plus text), `.tip-progress`, `.tip-diff`, `chips()`.

**Rule: anything hoverable that represents something gets this tooltip.** That covers avatars, stickers, posters, setup specs, the push tile, social rows and the moon. To add one, call `tipContent.set(el, { accent, content })` with `esc()` on every dynamic value, and add the element's selector to `posterFrom`. It opens on hover (not touch) and on focus, and closes on scroll.

**Dialogs** (`.keys-dialog`, and `.keys-dialog.snap-dialog` for the snapshot). Fixed and centred, `--surface-high`, radius 28, padding 24, opening with the popover recipe from .92. Focus moves in on open and back to the trigger on close; an outside click and Esc both close. A new dialog adds a modifier class on `.keys-dialog` and doesn't fork it.

**Palette menu** (`.palette-menu`). 330px, `--surface-high`, radius 24, grows from the top right. The title "colour" is followed by a 5-column grid of `.swatch-btn`. Each swatch is 46px: primary on the top half, secondary and tertiary on the bottom, like Android's picker. The default swatch is a tiny bento of brand-coloured cards.

**Since strip** (`.since`). A `--primary-container` pill between the intro and the bento, shown if the last visit was more than 3 hours ago. It diffs songs, contributions and episodes against `sc136-visit-v1`.

**Discord tile** (`.t-discord`). A 64px avatar with a status dot in Discord's own colours (online `#23a55a`, idle `#f0b232`, dnd `#f23f43`, offline `#80848e`), the text, and either game art or album art. While Spotify plays, `.discord-bar` shows the squiggle.

**Squiggle progress.** Android's wavy media progress: a wave travels along the played part and the rest is a flat track. On the Last.fm preview, the wave is drawn live from an `AnalyserNode` so it moves with the music, eases down to a flat line on pause and back up on play. It runs at the same 20px a second as the Discord bar.

**Listening** (Last.fm). Art, status ("playing right now" or "last played 5 min ago"), title, artist and a `.lf-play` button for a 30-second iTunes preview, then two recent tracks, a footer of monthly stats, and a Spotify embed of the current favourite.

**Charts.** The GitHub year grid uses 4 levels of `--primary` mixed into `--surface-high` (32/56/80/100%, oklab), and its cells grow to circles on hover. The monthly bars use `--h`. The language bar and legend use GitHub linguist colours. Tracks are on-surface at 8–14%.

**Strava route.** The shape of the walk only: no map, no coordinates, and the first and last 400 m left off. It draws over 2.6s when half on screen.

**This week in numbers** (`.t-week`). Four `.stat`s (songs played, pushes, repos touched, episodes), then a three-way `.seg` switch (music, anime, code; the same control as the watching card, kept apart from its script by the `wk-seg` class). The three panels sit on top of each other in one grid cell, so the card keeps the height of the tallest and doesn't jump; the hidden ones are `visibility: hidden`. Every panel opens with the same 7-bar chart (Monday to Sunday in Mumbai time, each bar with the rich tooltip and keyboard focus), then a list. Music: songs per day, and the three most played songs. Anime: episodes per day, and the shows watched this week with their covers, which episodes, and a link to AniList. Code: pushes per day, and the repos pushed to, how many pushes, when the last one was, and a link. All the lists are the same segmented rows as the timeline, and each row is a link that opens in a new tab. Songs come from Last.fm (`from=` Monday, 200 a page), pushes and repos from GitHub's public events, episodes and shows from AniList's activity feed. Each source fails on its own, to a `?` and a "napping" row, and the footnote says "some numbers are napping". Coding hours are not here on purpose: the WakaTime shares on the page are all-time, so a weekly number would be invented. Private repos don't show, because the public feed doesn't list them. When the two cards in a row differ in height, give the shorter one real content, and pin its footnote to the bottom.

**Today, so far** (`.t-today`). A 24-hour strip, a legend of what each colour was and for how long today, then everything the "now guess" said today (the last 60 changes), as segmented rows (the same rows as the lists, 40px icon tile, time on the right, the newest says "now"). The strip's colours: coding, pushing and working are `--primary`; music `--tertiary-container`; watching and playing `--primary-container`; online, browsing and busy `--secondary-container`; away and offline `--surface-high`; asleep `--surface-highest`. The unfilled rest of the day stays transparent. The data is the `activity_log` table (below). The list scrolls inside the card: it takes whatever height is left once the weekly card beside it has set the row's height (never less than 340px), so any number of entries fits, the newest is at the bottom and in view, and the rows stretch to fill a quiet day. A refresh doesn't pull it back down if you have scrolled up to read earlier ones. The footnote is pinned to the bottom with `margin-top: auto`.

**Guestbook** (`.t-guest`). A form on the left (textarea, moods, stickers, optional name, "Leave it"), the wall on the right. Notes come from the three containers in turn (`3n+1` primary, `3n+2` secondary, `3n` tertiary). Each is stuck on a little crooked with a deterministic `--tilt`, so the same note always hangs the same way, and has its sticker on the corner. Unnamed notes get a stable made-up name such as "sleepy otter". Notes are approved by the owner on `/admin`, the wall shows 10, and pending notes of your own show dashed as "yours, waiting for me to read it". Validation: at least 2 characters, no links, one per minute, three a day, plus a honeypot that pretends to succeed.

**Server banner** (`.t-server`). The one card that stays dark in every theme, because its art is black-edged. The text stays on the dark side, clear of the art. The animated art loads only when the card is near the screen.

**Snapshot.** `P` paints a 1080×1920 PNG of right now: the sky, the avatar in its live shape, the guess, time, weather, song and Discord, all in the page's current colours read through `paintOf()`. Nothing is redesigned for the picture.

**Loader.** A `--primary-container` blob with a `--primary` shape morphing inside. It shows for at least 1.8s, waits for fonts and images up to 4s, then the cards rise in.

## Data and states

- **Markup holds the loading state.** Values ship as `–`, or as a short lowercase line ending in `…` ("checking the sky…", "asking last.fm…", "loading hours…"), or as skeleton posters. JS only overwrites them with `setText(id, …)`, which is null-safe.
- **Failure copy is a personified lowercase sentence** that replaces the loading text: "weather unavailable", "github is taking a nap", "steam is napping", "last.fm is quiet right now". Empty is its own state: "nothing on the go right now.". Every new card needs all three states (loading, empty, failed). Never leave a skeleton forever.
- **Caching.** Use `loadCached(key, url, pick, ttl)`. It serves cache while fresh, otherwise fetches, trims the result with `pick` and stores it, and serves stale cache on error. Keys look like `sc136-<thing>-v<N>`: bump the version when the stored shape changes. TTLs: repos 30 minutes (the cache is shared with the portfolio's projects page), push 10 minutes, commit 24 hours, Duolingo 6 hours.
- **Last resort.** A bundled snapshot (`js/repos-snapshot.js`, `DUO_SNAPSHOT`) is used when both the API and the cache fail, for example under GitHub's 60-requests-an-hour limit.
- **Refresh.** Discord is live over the Lanyard websocket with backoff (3s doubling to 60s). Last.fm refreshes every 45s and only while the tab is visible. Weather every 20 minutes, the clock, sky and moon every 15s.
- **The activity log.** The `log-activity` edge function runs every 15 minutes (pg_cron calls it with a secret header) and works out what the "now guess" would say, using the same sources and order as `guessNow()`. It adds a row to `activity_log` only when the state changed, so a row is the start of a stretch and the next row is its end. Anyone can read the table, only the function can write (no insert policy), and rows older than 30 days are deleted. If you change `guessNow()` change the function too. The schema is `supabase/activity-log.sql`; the cron secret is never in the repo.
- **Hand-copied data says so** in a `.strava-note` footnote ("as of 5 oct 2026, copied from my strava since it has no free live feed").
- **Data that other parts need** goes on `NOW.*`, followed by a call to `paintGuess()`.
- **Keys and secrets.** Only public, read-only keys go in the page (the Last.fm read key, the Supabase anon key whose access is limited by database policies). Anything secret (Duolingo, Letterboxd, Steam) goes through a Supabase edge function. **Secrets never go in the repo.**
- Visits are counted only on `sc.is-a.dev`, so local testing never adds a view.
- localStorage access is always wrapped in try/catch.

## Voice

Swar is talking. Write it the way he would type it.

- **Lowercase** for all visible prose, including "i", place names and brands in a sentence: "hey, i'm swar", "what i'm listening to", "github is taking a nap". Capitals only for brand names on buttons (Spotify, AniList), single-word actions (Contact, Share, Save, "Leave it"), proper titles (film and game names, SC136) and aria-labels (sentence case).
- **First person singular.** Card titles are "what i'm watching", "how i code", "games i've played", "where to find me". "You" appears only where the visitor acts (the guestbook).
- **Warm and slightly funny,** never corporate. Failures are personified and excuses friendly: "couldn't leave it just now, try again in a bit". Sticker and avatar captions can be memes ("get in the robot, shinji", "ok.").
- **Punctuation:** `·` between facts ("an outdoor walk · 1h 54m · 26 m climbed"), `…` for in-progress, `–` for an empty value, commas instead of em dashes, no full stop on fragments. Use straight apostrophes.
- **British spelling:** colour, favourite.
- **Numbers:** short units glued on ("4h 49m", "5m ago", "29°C"), `toLocaleString()` for counts, lowercase dates ("5 oct 2026").

## Accessibility

- Focus ring: `outline: 3px solid var(--primary); outline-offset: 3px` (2px on cards and controls). If something is clip-pathed, draw the ring around it (`.hero::after` for the avatar) or use a drop-shadow (the mascot), because clip-path cuts off outlines.
- Anything you can click is reachable by keyboard: a real `<button>`/`<a>`, or `role="button" tabindex="0"` with Enter/Space handlers (the mascot, the moon). Anything with a tooltip shows it on focus as well.
- Toggles use `aria-pressed`. Groups use `role="group"` with a label. Charts are `role="img"` with an `aria-label` that says what they show.
- Decorative layers are `aria-hidden` (sky, glow, backdrop, legends). Icon glyphs are hidden by `hideIconWords`. Use `.sr-only` for labels that are only for screen readers.
- Status updates use `role="status"` or `aria-live="polite"` on the smallest element that changes, not on a whole card that re-renders every second.
- Every dialog moves focus in, closes on Esc and outside click, and returns focus to its trigger.
- Shortcuts (`? T C A S P Esc`) ignore modifier keys and form fields. The `?` hint at the bottom lists them.
- Honour `prefers-reduced-motion` in CSS and through `reduceMotion` in JS. Freeze motion, keep colour.
- Contrast comes from M3 role pairs and scrims, as described under Colour. Never put a raw hex on a surface.

## Adding a new card

1. **Pick a slot that keeps rows balanced.** A `span-2` needs a partner in the same row, a `rows-2` needs two stacked partners, and a full-width card goes with the `span-4` group at the end. Check the 2-column layout too.
2. **Markup:** `<section data-brand="x" class="card span-2 t-x" aria-labelledby="xTitle">`, or `<a class="card …" target="_blank" rel="noopener noreferrer">` if the whole card links out. Placement comes only from `span-*` and `rows-*`. The `t-x` class is for styling only.
3. **Header:** a `.shape-icon` (with `.tonal` or `.gold` if needed) and an inline `--shape-a`/`--shape-b` pair its neighbours don't use, then `<h2 class="card-title" id="xTitle">` in lowercase first person.
4. **Body:** existing parts only (`.stats`, `.subhead`, `.list` rows, `.posters`, an inner panel, `.chips`), on the surface ladder. Use role tokens only. If you need a role that doesn't exist, stop and add it to every palette.
5. **Brand:** add a `[data-palette="default"][data-theme="dark|light"] [data-brand="x"]` role set (Content scheme, tertiary equal to primary), a `BRAND_GLOW` entry, and `data-glow` on items with their own colour.
6. **Data:** loading text in the markup, `loadCached` with a `sc136-x-v1` key and a TTL, a personified failure line, an empty state, and `setText` for every write. Public read-only keys only. Anything secret goes through an edge function.
7. **Bottom edge:** `.card-actions` with a tonal `.btn` named after the source, pinned with `margin-top: auto` if the card can be stretched.
8. **Tooltips** for anything that represents something: `tipContent.set` plus the `posterFrom` selector.
9. **Motion:** a base `transition` for every hover change, radius on `--ease`, scale and shape on `--spring`, and a `reduceMotion` path for anything that moves continuously.
10. **Icons:** add every new Material Symbol name to the `icon_names` subset URL.
11. **Check** in dark and light, coral and default, at 1180, 1000, 720, 600 and 375px wide, with the keyboard, and with reduced motion on. Make sure the row still ends level.
12. If you add a mini, give it an `id`. The snapshot finds the time and weather minis as the only `.card.mini` elements without one.

## Don'ts

- **No glass.** A frosted, glass-tinted context menu was built and rejected. Liquid glass belongs to swar.is-a.dev.
- **No custom right-click menu.** One existed and was removed: every action in it already had a button or a shortcut, and it hid the browser's own menu (copy image, inspect). Don't bring it back.
- **No undefined tokens.** `--surface-container-high` made the menu transparent. Check every `var(--…)` against the 19 roles.
- **No generic live indicators.** A pulsing green dot was rejected as AI-looking. Use the source's own signal: Discord's status colours, the squiggle, "playing right now".
- **Don't pad to balance a row.** Add real content. Backloggd got a shelf of favourites, and the CS2 tile minimum went down to 180px so the listening and watching columns end level.
- **Don't snap state.** The listen-along progress went ring, then bar, then CSS-mask squiggle, then a live-drawn wave, specifically so it could ease flat on pause.
- **Don't decorate the avatar.** A pointer-following aurora behind it was replaced by drift bands in the sky.
- **Don't show a map.** The Strava card is the route's shape only, with the ends trimmed, for privacy. (The previous DESIGN.md called it a "Strava map". It isn't one.)
- **Don't flip-flop a card's treatment.** The Strava card's hover wash and halo changed six times in a row. Decide once using the brand-mode rules: brand glow in default mode, route halo kept.
- **Don't fake data.** No placeholder numbers presented as live. Hand-copied numbers carry a footnote.
- **Don't commit secrets** or a non-public API key.
- **Don't copy sections** from other sites or from the portfolio, and don't put ASCII art next to big type.
- **Don't shorten the loader** below its 1.8s minimum or skip it on repeat visits.

## Known debts

Fix these when you are nearby. Don't copy them.

- Hard-coded colours where a role exists: `.guest-msg.bad #ffb4ab/#ba1a1a` (there is no `--error` role) and `BRAND_GLOW.sc #e8826a` (not the seed). `.discord-bar span #1ed760` is deliberate: it is Spotify's own green.
- `--brand` is set in every brand rule but never read.
- The dialogs are not modal (the page behind stays usable), so they have no `aria-modal` and no focus trap on purpose.
- Only coral's seed is recorded, so the other palettes can't be regenerated from source.
