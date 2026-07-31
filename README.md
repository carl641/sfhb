# Southern Family Home Builders — Homepage Rebuild

Rebuilt homepage for [southernfamilyhomebuilders.com](https://www.southernfamilyhomebuilders.com/): a family-owned custom home builder serving Athens, Huntsville, and North Alabama.

Static site, no build step, no runtime dependencies. Open `index.html` or serve the folder from any static host.

```
index.html            The page
assets/css/styles.css All styling (design tokens, light + dark themes)
assets/js/main.js     Nav, scroll reveals, gallery controls, form validation
assets/fonts/         Self-hosted variable fonts (Bricolage Grotesque + Figtree, via Fontsource, OFL)
assets/img/           Favicon, logo, and project photography
```

## Design notes

- **Palette:** deep pine green + bone neutrals + a single amber accent. Defined as CSS custom properties at the top of `styles.css`; dark mode follows `prefers-color-scheme` automatically.
- **Type:** Bricolage Grotesque (display) and Figtree (body), self-hosted woff2, ~60KB total.
- **Motion:** subtle scroll reveals via IntersectionObserver and a one-time hero settle. Everything honors `prefers-reduced-motion`.
- **Icons:** inline SVG sprite from Phosphor Icons (MIT).

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
