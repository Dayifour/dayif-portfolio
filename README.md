# Sekou Dayifourou KEITA Portfolio

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Live

Production: https://www.dayifour.dev/

## Highlights

- Editorial portfolio using one vivid blue accent and cool neutral surfaces
- Four live products: Doumini Douman, SUGUBA, Bestrans and SmartSchool
- Optimized real product screenshots and an illustrated Bestrans backend story,
  with direct website, Google Play and App Store links
- Typographic entrances, magnetic calls to action and scroll reveals
- Editorial expertise in interfaces, backend systems and deployment, linked to
  relevant work; project details use native accessible disclosure controls
- French and English content rendered by Server Components
- Automatic light/dark appearance and browser language, with simple EN/FR and
  sun/moon toggles that persist explicit choices
- Direct WhatsApp contact in the header, hero and final call to action
- Request-aware SEO metadata, JSON-LD, and a dedicated social sharing image
- Accessible navigation, reduced-motion support, security headers, and sitemap
  generation

## Tech Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS + shadcn/ui utilities
- ESLint 9 (flat config)

## Visual identity

| Colour | Value | Role |
| --- | --- | --- |
| Blue | `#2C5BEA` | Primary actions, links, display accents and branding |
| Deep blue | `#152645` | Main text and dark surfaces |
| Cool white | `#F4F7FF` | Reading surfaces and text on dark backgrounds |

Use blue tints for large light surfaces and `#9DBAFF` for accents on dark
surfaces. Dark mode preserves the same blue family. No copper, green or purple
accents are added to the interface. Project screenshots and third-party logos
retain their original colours.

Use 32 px radii for portraits, 28 px for project stages, 14 px for inset
screens, and pill shapes for action buttons. On mobile these become 24, 20 and
12 px. These values live in the `--radius-*` CSS properties. Preserve the
photographs' original aspect ratio and clip them cleanly inside the rounded frame.

The CSS primitives are in `app/globals.css`; static branding colours are in
`lib/design-tokens.ts`. The favicon source is `public/logos/brand-mark.svg`.
Run `npm run icons` after changing it.

Use Geist for reading text and navigation, Georgia italic for display accents,
thin rules for structure, and the shared `Contour` drawing for decorative art.
Keep photographs upright and avoid coloured card collections, simulated browser
toolbars, stickers, or a different background colour for each section. Motion
supports entrances, links and the artwork, with reduced-motion preferences respected.

## Local Development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - run production build locally
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks

## Project Structure

- `app/` - page, layout, theme, language, and section components
- `components/ui/` - reusable UI primitives
- `lib/` - shared utilities and server-side translations
- `public/` - optimized portraits, sharing artwork, logos, and static assets

## Languages and appearance

- English and French content is rendered by Server Components. `lib/i18n.ts`
  resolves the language from the `portfolio-language` cookie, then the browser's
  weighted `Accept-Language` header; unsupported languages fall back to English.
- `lib/translations.ts` holds the French translations. Only the messages used by
  interactive components are passed to the client provider.
- The language toggle stores the choice in a cookie and refreshes the Server
  Component payload. Before a manual choice, the browser language is used.
- The theme follows `prefers-color-scheme` by default. Manual light/dark choices
  are saved locally. Before a manual choice, system changes are followed. A small script
  applies the theme before paint. Colors live in `app/globals.css`.
- The homepage's client boundaries are Header, Preferences and Motion. Reveal
  and all content sections are Server Components; Motion progressively enhances
  their DOM without hiding content when JavaScript is unavailable.
- The homepage is rendered per request, so the sitemap explicitly includes `/`.

## Contact

- Email: sekoudayifourouk@gmail.com
- WhatsApp: https://wa.me/22379994640
- LinkedIn: https://www.linkedin.com/in/dayifour
- GitHub: https://github.com/Dayifour

## Hiring Notes

- See [BASK-HEALTH-CHECKLIST.md](BASK-HEALTH-CHECKLIST.md) for the application checklist and proof-of-work links strategy.
