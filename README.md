# AIRops Academy Website

A polished, conversion-oriented website for AIRops Academy — practical AI education for HubSpot RevOps teams.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- Static site generation (SSG)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Homepage (all sections)
│   ├── globals.css         # Global styles + Tailwind theme
│   └── register/
│       └── page.tsx        # Registration page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Top navigation
│   │   └── Footer.tsx      # Footer
│   ├── sections/           # All homepage sections (one per file)
│   │   ├── Hero.tsx
│   │   ├── FeaturedProgram.tsx
│   │   ├── WhyThisExists.tsx
│   │   ├── Outcomes.tsx
│   │   ├── WhatsIncluded.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Curriculum.tsx
│   │   ├── WhatYouMightBuild.tsx
│   │   ├── WhoItsFor.tsx
│   │   ├── Comparison.tsx
│   │   ├── FutureProof.tsx
│   │   ├── Roadmap.tsx
│   │   ├── PricingCta.tsx
│   │   ├── Faq.tsx
│   │   ├── FinalCta.tsx
│   │   ├── Testimonials.tsx       # Placeholder (hidden by default)
│   │   └── RegistrationForm.tsx   # Client-side form component
│   └── ui/
│       └── SectionWrapper.tsx     # Reusable section layout
└── content/
    └── siteContent.ts      # ← ALL EDITABLE CONTENT LIVES HERE
```

## Editing Content

**Nearly all text, pricing, dates, and configuration lives in one file:**

```
src/content/siteContent.ts
```

### Common Edits

| What to change | Where in `siteContent.ts` |
|---|---|
| **Standard price** | `pricing.standard.amount` |
| **Special offer price** | `pricing.specialOffer.amount` |
| **Special offer deadline** | `pricing.specialOffer.deadline` |
| **Turn offer on/off** | `pricing.specialOffer.active` → `true`/`false` |
| **Offer eligibility groups** | `pricing.specialOffer.eligibility` array |
| **Hero headline** | `hero.headline` |
| **Hero subheadline** | `hero.subheadline` |
| **CTA button text** | `hero.primaryCta.label`, `navigation.cta.label` |
| **CTA button link** | `hero.primaryCta.href`, `navigation.cta.href` |
| **FAQ items** | `faq.items` — add/remove/edit `{ question, answer }` objects |
| **Curriculum sessions** | `curriculum.sessions` array |
| **What's Included items** | `whatsIncluded.items` array |
| **Audience cards** | `whoItsFor.audiences` array |
| **Registration form fields** | `registration.fields` |
| **Roadmap items** | `roadmap.items` — set `status` to `"available"`, `"coming"`, or `"planned"` |

### Turning Off the Special Offer

```ts
// In siteContent.ts → pricing.specialOffer
specialOffer: {
  active: false,  // ← Set to false to hide the offer everywhere
  // ...
}
```

### Updating Dates

Search for the deadline string in `siteContent.ts`:

```ts
deadline: "March 12, 2026",  // ← Change this
```

## Registration Integration

The registration form is a client-side React form in `src/components/sections/RegistrationForm.tsx`.

Currently it simulates submission. To connect it to a real backend, look for the **`INTEGRATION POINT`** comment in that file. Three options are documented:

1. **HubSpot Forms API** — POST to `api.hsforms.com`
2. **Stripe Checkout** — Create a Next.js API route at `/api/checkout`
3. **Custom backend** — POST form data to any endpoint

### Form Fields Captured

- Full Name
- Email Address
- Company
- Role / Title
- HubSpot / RevOps Background (optional)
- Eligibility: Provider / Profoundly Kickoff / Neither

## Adding Future Offerings

### Add a New Course Page

1. Create `src/app/programs/[slug]/page.tsx`
2. Add course data to `siteContent.ts` (or create a new content file)
3. Add the course to the nav: update `navigation.links` in `siteContent.ts`
4. Update `roadmap.items` status from `"coming"` to `"available"`

### Add a Programs Listing Page

1. Create `src/app/programs/page.tsx`
2. Pull from a courses array in `siteContent.ts`

### Navigation is expansion-ready

The navbar supports additional links and can easily be updated to include dropdowns for a Programs menu.

## Deployment

This is a static Next.js site. Deploy to:

- **Vercel** (recommended): `npx vercel`
- **Netlify**: Connect the repo, build command `npm run build`
- **Any static host**: Upload the `out/` directory after running `npm run build && npx next export`

## Design System

- **Dark theme** — navy/charcoal background (`surface-950` through `surface-600`)
- **Brand color** — blue (`brand-400` through `brand-900`)
- **Accent color** — teal (`accent-400` through `accent-600`)
- **Font** — Inter (loaded via `next/font/google`)
- **Patterns** — Grid lines and dot patterns for visual depth
- Colors are defined in `src/app/globals.css` under `@theme`
