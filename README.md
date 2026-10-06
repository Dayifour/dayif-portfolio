# Sekou Dayifourou KEITA Portfolio

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Live

Production: https://www.dayifour.dev/

## Highlights

- Visual portfolio built around an editorial portrait and a vibrant cobalt,
  coral, mint, and ivory palette
- Four live products: Doumini Douman, SUGUBA, Bestrans and SmartSchool
- Optimized real product screenshots and an illustrated Bestrans backend story,
  with direct website, Google Play and App Store links
- Typographic entrances, magnetic calls to action, portrait depth and scroll reveals
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
