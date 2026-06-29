# SADIK Design System

> **"Senin verini senin makinende tutan, sesle çalışan kişisel masaüstü asistanı."**
> A voice-driven personal desktop assistant that keeps your data on your machine.

---

## Product context

**SADIK** ("sa-dik" — Turkish for *loyal, trusty*) is a Windows + macOS desktop
assistant built as an Electron app, with an optional ESP32-powered companion
device that displays an animated face on a tiny OLED/TFT screen. The product
copy is **primarily Turkish**; the brand name and logo are bilingual.

The surface area today is:

| Surface | Tech | Audience | Role |
|---|---|---|---|
| **SADIK Desktop App** | Electron + React 18 + Tailwind + lucide-react | beta users | the product itself — dashboard, tasks, habits, chat, voice |
| **SADIK Landing** | Static HTML/CSS (`landing/index.html`) | prospective users | install gateway → GitHub Releases |
| **SADIK Device** | ESP32 firmware, OLED/TFT animation engine | hardware buyers | optional accessory; expressive mascot face |

The codebase also carries a `ui_dream/` folder of screenshots from a sibling
project named **Tabbie** that the author used as visual inspiration for screens
that don't exist in SADIK yet (workspaces, habits screen-time view, "think"
note-capture). The Tabbie screens are *aspirational, not shipped* — this design
system codifies the SADIK design language, not the Tabbie one.

### Sources used to build this system

- Codebase: `sadik_v2/` (attached) — primarily `sadik_v2/sadik-app/src/`
  (Electron React app) and `sadik_v2/landing/index.html` (marketing page).
- GitHub: <https://github.com/ntrch/sadik_v2> — open in a future session to
  pull more components (especially `sadik-firmware/` if you need the OLED
  animation specs verbatim, or `sadik_color/` for the TFT version).
- Logo: `uploads/icon.png` — bundled as `assets/sadik-mark.png`.
- Aspirational reference (Tabbie): `sadik_v2/ui_dream/*.png`, mirrored into
  `assets/dream_*.png` so you can see what richer layouts might look like.

---

## CONTENT FUNDAMENTALS

### Voice & language
- **Primary language: Turkish.** Every shipped string in the app is `tr-TR`.
  When generating new UI copy, write in Turkish *first*, English second.
  English appears only in dev/log strings and the package name.
- **Tone: warm, terse, second-person singular ("sen").** SADIK addresses the
  user informally — `Günaydın`, `Merhaba, Erkin`, `Mod değiştirildi`. Never
  formal *siz*; never corporate.
- The assistant **acts as a colleague**, not a butler. Marketing copy says
  *"Sadık seninle çalışır, senin adına değil"* ("SADIK works *with* you, not
  *for* you"). Carry that energy: SADIK confirms, suggests, asks — it doesn't
  fawn or apologise.
- Speech pronunciation note: the TTS layer rewrites "Sadık" → "Sağdık" so
  Turkish speakers hear the soft-d. Don't fix it; it's deliberate.

### Casing
- **Sentence case everywhere** — buttons, menu items, headings. `Pomodoro
  başlat`, not `POMODORO BAŞLAT`.
- **UPPERCASE is reserved** for two things: the brand wordmark (`SADIK`) and
  short eyebrow/section labels above headings (`TODAY`, `ÖZELLİKLER`,
  `ŞIMDI`). Treat the eyebrow as a typographic flourish, not a regular label.
- **CamelCase / PascalCase: never in copy.** Only in code identifiers.

### Punctuation & numbers
- Turkish punctuation (`?`, `!`) sits next to the word, no leading space.
- Use the Turkish thousands separator (`1.234`), but `tabular-nums` for any
  changing counter (`4 Saat 30 Dakika`, `8h 32m`, `25:00`).
- Time format: 12-hour with `AM/PM` on the dream UI; the actual app uses
  24-hour (`14:30`) via `toLocaleTimeString('tr-TR')`. Match the surface.
- Dates: `14 Kas` (short month, day) for chips; `Cuma, 14 Kasım` (full) for
  headers.

### Emoji
**Emoji are not part of the brand.** The source code carries no emoji in user
strings, and the icon set is exclusively **lucide-react** (line icons). If you
catch yourself reaching for an emoji, draw a lucide icon at 14–18px in the
nearest accent color instead.

### Vibe — phrases that fit
- `Günaydın`, `İyi akşamlar`, `Merhaba, Erkin` — time-of-day greetings.
- `Sadık seninle çalışır, senin adına değil.` — the value-prop drumbeat.
- `Tamam`, `Anlaşıldı`, `Hallederim`, `Not aldım`. — confirmation patterns.
- `Duyamadım, tekrar söyler misiniz?` — when STT fails. Always polite.
- `Görev sil`, `Alışkanlık sorgula`, `Pomodoro başlat`, `Mod değiştir` —
  imperative + one noun. Two words max for a command label.
- `Beta — Windows & macOS` — current product status, set as an eyebrow pill.

---

## VISUAL FOUNDATIONS

The defining mood is **"calm dark room with a single lamp lit purple."** The
app is shipped as a dark-first Electron window with a heavy reliance on glass,
soft purple primary, and saturated categorical accents used like color-coding.

### Theme
- **Dark is default.** Light theme exists (`.light` on `<html>`) but is a
  secondary path — when in doubt, design dark.
- The dark palette is **slightly cool slate**, never pure black. The product
  reserves pure `#000` for the OLED face on the device and for the contrast
  background behind the logomark.

### Color
- **Surfaces** stack in 6 tiers (`bg-main` → `bg-elevated`). The relationship
  between them is **5–10 RGB-points of brightness** — depth comes from glass
  + shadow, not heavier grays.
- **One primary**: `#A78BFA` (Tailwind violet-400). It's the brand color,
  the focus ring, the active nav indicator, and the speaker / pulse glow.
- **Accents are categorical, not decorative.** Each mode owns one color
  (working = purple, coding = cyan, break = mint, meeting = yellow…). Status
  colors are tinted versions of the same palette — `green = success`,
  `yellow = warning`, `red = danger`, `cyan/blue = info`.
- **Never use bluish-purple gradients as standalone backgrounds.** The landing
  page uses a wordmark text-gradient and faint hero glows, and the source code
  uses gradients exactly *zero* other places. Gradients are for the wordmark
  and the wordmark only inside the product. Decorative gradients = AI slop
  here; resist them.

### Type
- **Inter** at 300–800. System font stack as fallback. Apple-system on macOS.
- **Compact**: app body is 14px (Electron density), 13/12 for secondary copy,
  16/20/24/32 for h3/h2/h1/display. The landing page can go bigger
  (clamp 2.5rem → 5rem on the hero h1).
- **Tight tracking on titles** (`-0.02em`), neutral on body, wide-uppercase
  (`0.18em`) only on eyebrows.
- **JetBrains Mono** for any number/code surface: durations, version strings,
  raw command text. Tabular numerals are mandatory anywhere a counter ticks.

### Backgrounds & motifs
- **No imagery in the product surface.** No stock photos, no illustration,
  no full-bleed images. The only graphic asset that exists is the mustache
  logomark.
- **Backgrounds: solid slate.** The landing page adds two very faint radial
  glows behind the hero (`rgba(99,102,241,0.18)` + `rgba(168,85,247,0.10)`)
  but they are subtle — barely noticeable — never the primary visual.
- **No textures, no patterns, no grain.** Surface depth is 100% achieved via
  the glass/blur layer.
- The OLED face mascot acts as the brand's *living visual* — animated dots
  for eyes, expressive states (`idle`, `thinking`, `talking`, `goodbye`).
  Anywhere you'd want a hero image, drop the OLED preview component instead.

### Borders
- 1px borders on every card, input, button, chip. The border *carries* the
  shape; we do not rely on shadow alone.
- Two border tiers: `border` (`#2A313B`, visible) and `border-subtle`
  (`#1F242C`, near-invisible). Cards inside groups use `border-subtle`;
  standalone cards use the regular `border`.
- Focus ring is `1px solid #A78BFA`, applied to the same `border` slot — no
  separate `outline`. Inputs lose the browser ring (`outline: none`) and gain
  the purple border on `:focus`.

### Shadows & glow
- **`shadow-card`** (`0 1px 2px rgba(0,0,0,0.25)`) — every card, very subtle.
- **`shadow-header`** (`0 4px 20px rgba(0,0,0,0.4)`) — header bar.
- **`shadow-nav`** (`0 -4px 20px rgba(0,0,0,0.4)`) — the floating bottom nav.
- **`oled-glow`** — tight `0 0 1px + 0 0 8px` purple bloom, *only* used around
  the device preview to suggest a backlit OLED.
- **No outer drop-shadows on buttons.** Buttons rely on color + border.

### Corner radii
- **14px (`btn`)** is the default for all buttons, inputs, chips, mode pills.
- **18px (`card`)** for every container card.
- **16px (`nav`)** for the OLED preview and any nav-island shape.
- **8px (`sm`)** for tiny inner chips/tags inside a card.
- **`pill` (9999px)** for the floating bottom nav, the SADIK device-status
  badge, and the privacy-tier pills.

### Glass / blur
- Three blur tiers ship in `globals.css`:
  - `glass` — 16px blur + 1.3 sat, used as the default card surface in dark
    mode (every `.bg-bg-card` gets it automatically).
  - `glass-heavy` — 24px blur + 1.5 sat, used for floating elements: the
    bottom nav, popovers, modal scrim cards.
  - `glass-btn` — 12px blur + 1.2 sat, opt-in for buttons inside glass
    containers.
- Glass is always layered on top of a real solid color; never use blur as a
  hack to make something semi-transparent over the page background — there's
  no busy background to blur in this product.

### Layout rules
- **Header bar is sticky**, height ≈ 56px, `glass-heavy`, no border. Lives
  inside the Electron chrome.
- **Bottom nav floats free**, ~520px wide pill, centered, `bottom: 20px`.
  This is the single most distinctive layout choice in the app — embrace it.
- The body region is a single scrolling column, padded `p-6` on desktop.
  Multi-column layouts are reserved for stat-card grids (2-up / 4-up) and
  task boards (variable column count). Side rails are uncommon.

### Hover / press / motion
- **Hover** = `opacity: 0.88; transform: translateY(-1px)` on CTAs, or
  `border-color: <one step lighter>` on cards. No size jumps.
- **Press** = same look as active state — no shrink, no shadow change. Active
  is communicated by *filling in* the colored background of a chip/pill.
- **Motion is light and fast.** Default duration is `150ms` with
  `ease-out` (`cubic-bezier(0.2, 0.8, 0.2, 1)`). Three named animations live
  in `globals.css`: `fade-in (.2s)`, `slide-in-right (.22s)`, `pulse-ring`
  (used on the active wake-word indicator). Page transitions are 150ms
  opacity-only fades.
- **No bounce, no overshoot.** No spring physics. The brand is calm.

### Transparency
- Tinted backgrounds are the dominant idiom. A chip's idle state is
  `bg = color/8% + border = color/30% + text = color/80%`; active swaps to
  `bg = color/20% + border = color + text = color`.
- Glass overlays are reserved for the floating nav, popovers, the wake-word
  indicator pulse and the OLED face glow — never for static body content.
- No transparent text.

### Card composition
A SADIK card is always:
1. `bg-card` background.
2. 1px `border-subtle` (inside a group) or `border` (standalone).
3. `radius: 18px`.
4. `padding: 16-24px` (use 20px when in doubt).
5. `shadow-card` (1px hairline) if it's interactive.
6. Glass blur layered on if it's the kind that gets the `.bg-bg-card` class
   (most do, automatically).

Cards inside a section are often *grouped under an accordion header* with an
icon-in-tinted-square (`w-7 h-7 rounded-lg bg-accent-{x}/20 ring-1
ring-accent-{x}/40`) on the left and a `Tümünü Gör →` link on the right.
This is the most reused organizational pattern in the dashboard.

### Imagery vibe
- No imagery — the brand is text-and-color-and-glass-only.
- The OLED face is the only "character" the brand uses, and it is monotone
  purple-on-black mono pixels.

---

## ICONOGRAPHY

- **Primary icon set: [lucide-react](https://lucide.dev) at the default 1.5
  stroke weight.** Used everywhere — navigation, buttons, cards, inline.
  Imported per-icon (`import { Mic, Settings } from 'lucide-react'`); no
  custom icon font and no icon-sprite.
- **Default size: 14–20px in app body**, 16/18 in nav, 24 in toolbar buttons.
  Stroke width stays at lucide's default (2 in the public CDN); never go
  thicker.
- **Colour by context.** Icons inherit the surrounding text color in muted /
  secondary areas, OR take the accent color of their semantic role
  (`text-accent-purple`, `text-accent-cyan`, …). Never multi-color a single
  lucide glyph.
- **Brand integrations** ship as full-color SVGs in `assets/integrations/`:
  Notion, Google Calendar, Google Meet, Slack, Zoom. Always preserve the
  upstream brand colors — these are the only multi-color icons in the
  system.
- **No emoji**, anywhere. (See Content Fundamentals.)
- **No Unicode pseudo-icons** (no `→`, `✓`, `▶`). Use the lucide equivalent.
- **No PNG icons** in product UI. PNGs only for the SADIK device mark
  (raster artifact of the mustache).

When recreating SADIK UIs and you can't reach `lucide-react`, the closest
CDN drop-ins are `lucide-static` (raw SVGs) or `lucide` (vanilla JS). They
ship identical glyphs.

---

## INDEX — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Agent-Skill entrypoint when this folder is exported. |
| `colors_and_type.css` | All CSS custom properties + semantic text classes. Source of truth. |
| `assets/` | Brand logos + the integrations subfolder. |
| `assets/sadik-mark.png` | Mustache logomark on black. |
| `assets/sadik-wordmark.svg` | Gradient SADIK wordmark. |
| `assets/integrations/*.svg` | Notion, GCal, GMeet, Slack, Zoom. |
| `assets/dream_*.png` | Aspirational Tabbie screens — reference only, *not shipped*. |
| `preview/` | Per-component preview cards rendered in the Design System tab. |
| `ui_kits/sadik-app/` | Hi-fi React recreation of the Electron desktop app. |
| `ui_kits/sadik-landing/` | Hi-fi recreation of the marketing landing page. |

### UI kits

- **`ui_kits/sadik-app/`** — open `index.html` to see the Electron app
  reproduced as a clickable prototype: dashboard, tasks board, chat, voice
  assistant. Each screen is a small JSX file you can drop into your own
  design.
- **`ui_kits/sadik-landing/`** — the public marketing page. One HTML file,
  no React, mirrors the production landing.

---

## Substitution notes for the user

- **Fonts**: shipped CSS pulls Inter and JetBrains Mono from Google Fonts.
  The upstream codebase doesn't bundle TTF files — it relies on the same
  Google Fonts URLs. If you want offline TTFs, please attach them and I'll
  swap them into `fonts/`. (No substitutions were made — Inter and JetBrains
  Mono are the real brand fonts.)
- **Google brand SVGs** (Calendar, Meet) had to be re-encoded from
  `iso-8859-1` to `utf-8` to make them importable. Visuals are identical.
- The aspirational **"Tabbie"** screenshots in `assets/dream_*.png` are not
  the current product. Don't use their layouts as ground truth for SADIK
  itself.
