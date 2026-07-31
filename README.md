# Southern Family Home Builders — Homepage Rebuild

Rebuilt homepage for [southernfamilyhomebuilders.com](https://www.southernfamilyhomebuilders.com/): a family-owned custom home builder serving Athens, Huntsville, and North Alabama.

Static site, no build step, no runtime dependencies. Open `index.html` or serve the folder from any static host.

```
index.html            The page
assets/css/styles.css All styling (design tokens, light + dark themes)
assets/js/main.js     Nav, scroll reveals, gallery controls, form validation
assets/fonts/         Self-hosted fonts (Libre Baskerville + Source Sans 3, via Fontsource, OFL-1.1)
assets/img/           Favicon, logo, and project photography
```

## Brand

The palette is pulled straight off the logo — pines, cabin logs, lettermark — and
lives as CSS custom properties at the top of `styles.css`. Dark mode follows
`prefers-color-scheme` and re-tunes the same hues; it does not introduce new ones.

| Token | Hex | Job |
| --- | --- | --- |
| `--forest` | `#2C4133` | Primary. Header beam, nav links, CTA band, footer. |
| `--forest-2` | `#334235` | Secondary green. The land & site development panel. |
| `--olive` | `#393B25` | Olive accent. Nav hover, and the tint on the hero scrim. |
| `--cedar` | `#A07356` | Secondary. Buttons, beam rules, card lintels, photo frames. |
| `--cedar-lt` | `#D9B08C` | Cedar for dark grounds — plain `--cedar` is only 2.7:1 on green. |
| `--wood-soft` | `#9A8066` | Lighter wood tone. Dividers and muted borders. |
| `--head` | `#000000` | Headlines, matching the SFHB lettering. |
| `--bg` | `#F7F6F4` | Warm off-white. Never a stark white page. |

- **Type:** Libre Baskerville for headings — a sturdy serif that echoes the
  lettermark — and Source Sans 3 for body copy. Self-hosted woff2, ~69KB total.
- **Beam motif:** the logo's timber framing, reused as a system. A cedar rule
  above every section heading, a 3px lintel across the top of each card, a
  hairline-and-corner-joint frame around the hero, cedar sills under the gallery
  photos and the form panel, and buttons milled square (4px) with a beveled edge
  and a black label — the logo's beam banner, more or less exactly.
- **Logo placement:** the artwork is dark on transparency, so it only ever sits on
  a light ground. The header bar stays off-white in both themes; on the green
  footer (and in the dark-theme header) it gets a cream sign-board with a cedar
  frame. Do not place it on `--forest`.
- **Contrast:** every pairing is AA or better, verified with axe-core in both
  themes at 1440px and 390px. `--cedar` is a large-text / border / icon colour on
  light grounds (3.8:1); body copy uses `--ink` or `--muted`. Cedar buttons carry a
  near-black label (4.8:1), and hover *lightens* to `--cedar-hi` so contrast rises
  rather than falls.
- **Motion:** subtle scroll reveals via IntersectionObserver and a one-time hero
  settle. Everything honors `prefers-reduced-motion`.
- **Icons:** inline SVG sprite from Phosphor Icons (MIT), plus a pine drawn to
  match the trees in the logo.

## Before launch

1. **Photography is real but thin.** Every image on the page is a self-hosted project photo from `assets/img/` — no stock, no hot-linking. There are five photos filling nine placements, so a few repeat between the service cards, the gallery, and the about panel:

   | Photo | Used in |
   | --- | --- |
   | `...hero+home-1920w.jpg` | Hero, gallery |
   | `...hero+custom+homes-1028w.webp` | Custom Homes card, gallery |
   | `...hero+green+home+building-1028w.webp` | About panel, gallery |
   | `...hero+home+additions-1028w.webp` | Home Additions card, gallery |
   | `...home+sub+image-453w.webp` | Remodeling card, gallery |

   Add more project photos to `assets/img/` and swap them in to clear the repeats. Gallery captions describe the subject rather than a town — add real project locations once they're confirmed.
2. **Wire the estimate form.** It validates client-side and shows a success panel, but does not send anywhere yet. Point the `<form>` at Netlify Forms, Formspree, or the site's CMS (see the note in `index.html` and `main.js`).
3. **Confirm the details.** Phone number (256) 397-3204, service-area towns, and the "20+ years / veteran discount / free estimates" claims were pulled from the current live site. Verify before publishing. The testimonial is placeholder copy awaiting a real customer quote.
