# Dental Art SM — website

A premium, production-quality website for a private dental clinic in Travnik,
built with React, TypeScript, Vite, and Tailwind CSS. No online booking
system — every call to action points to a phone number, email address, or
the contact section.

## Getting started

```bash
npm install
npm run dev       # local development server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build
```

No environment variables are required to run the project.

## Google reviews (Elfsight)

The "Šta naši pacijenti kažu" section (`src/components/GoogleReviews.tsx`)
embeds an [Elfsight](https://elfsight.com) "Google Reviews" widget rather
than calling the Google Places API directly. Which Google Business Profile
it pulls from, how many reviews are shown, and the widget's own styling are
all configured on elfsight.com — log in there to make changes; nothing on
the code side needs to change unless the widget ID itself changes (it's the
`ELFSIGHT_WIDGET_CLASS` constant at the top of that file).

## Currently disabled sections

`Gallery`, `Testimonials`, and `BeforeAfter` are commented out in
`src/pages/Home.tsx` (along with the "Galerija" nav link in `Navbar.tsx` and
`Footer.tsx`) at the client's request. The components and their data files
are untouched, so re-enabling any of them later is just a matter of
uncommenting the relevant lines.

## Editing content

All editable content lives in `src/data/`, so the site can be updated without
touching component code:

- `clinicInfo.ts` — clinic name, phone numbers, email, address, hours, social links, map URL
- `stats.ts` — trust statistics band
- `services.ts` — services list
- `doctors.ts` — doctor profiles (photos, bios, credentials)
- `gallery.ts` — gallery images and categories (currently unused — see above)
- `beforeAfter.ts` — before/after comparison cases
- `pricing.ts` — official price list by category
- `testimonials.ts` — patient testimonial placeholders (currently unused — see above)
- `faq.ts` — FAQ questions and answers

Some photography still uses Unsplash placeholder images (hero, about,
gallery data). Replace the `src`/`photo` URLs in the data files with real,
licensed photography as it becomes available. Placeholder statistics are
illustrative only and should be replaced with verified, real figures.

## Structure

```
src/
  components/   Reusable UI sections (Navbar, Hero, Services, Doctors, ...)
  data/         Centralized editable content
  pages/        Home.tsx composes all sections
  lib/          useReveal.ts — scroll-reveal animation hook
```
