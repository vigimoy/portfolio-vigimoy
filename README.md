# Muhamad Rizqi Akbar — Portfolio

Personalized implementation of Portfolio 2 for the WPH slicing assignment. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Radix Dialog. The button uses the shadcn/ui composition pattern.

## Links

- Portfolio: https://vigimoy-portfolio.vercel.app
- Repository: https://github.com/vigimoy/portfolio-vigimoy
- Movie Explorer: https://movie-explorer-vigimoy.vercel.app
- Foody: https://foody-vigimoy.vercel.app
- Sociality: https://sociality-vigimoy.vercel.app

## Run locally

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check a production build, run `npm run build` then `npm start`. Run `npm run typecheck` for TypeScript validation.

## Content

Edit `lib/content.ts` for profile details, project links, skills, learning timeline, and FAQ answers. Section copy and interaction logic are in `components/portfolio.tsx`. Styling is in `app/globals.css`.

- The interactive hero badge displays a generic profile silhouette. The About section uses Foto2 at `public/assets/foto-2.jpeg`.  The small hero portrait retains `public/assets/rizqi.png`. Personal portraits have been removed from FAQ and Built Through Practice.
- Movie Explorer and Foody link to the supplied public `vigimoy` repositories. Their descriptions and technology tags were checked against the repositories. Both apps have public Vercel demos configured in `lib/content.ts`: https://movie-explorer-vigimoy.vercel.app and https://foody-vigimoy.vercel.app. Repository and live-demo links are separate.
- Sociality is included as a third project based on the user's public repository, matching the three project slots in the design.
- Project covers use supplied WebP screenshots in `public/assets/projects`: Movie Explorer and Foody home pages, and a Sociality public profile/gallery. Screenshots are cropped in CSS to preserve the square cover layout. The Sociality profile is sample application content, not the portfolio owner's identity.
- Project cards use the compact cover/title/year layout. Descriptions, tags, and repository/demo links remain available through the expandable Project details disclosure.
- The experience and testimonial layouts contain bootcamp milestones and a Design / Build / Refine workflow. The personal version uses these in place of unsupported employment, client testimonials, and numerical skill ratings.
- Skills follow the icon/name/right-aligned status layout, using "In use" rather than invented proficiency percentages. The three-column approach table highlights current practice and continuing improvement rather than making claims about other developers.
- The contact form validates inputs and prepares a mailto draft. The visitor sends the message from their email application. There is no server-side email service or submission database.

## Design and sources

- [Selected Figma desktop](https://www.figma.com/design/AmHNYFhCvbJH82frlGLWKi/Portfolio-2---REP--Copy-?node-id=25414-1253)
- [Selected Figma mobile](https://www.figma.com/design/AmHNYFhCvbJH82frlGLWKi/Portfolio-2---REP--Copy-?node-id=25423-2015)
- [Bootcamp curriculum](https://docs.google.com/spreadsheets/d/16wNDiYfe-8Wzka4j2AnLPQNqnAsr5rdkPn2XSZi1c7Y/edit?gid=1236050090)
- [Movie Explorer](https://github.com/vigimoy/week-9-movie-explorer-app-vigimoy)
- [Foody](https://github.com/vigimoy/week-10-restaurant-app-vigimoy)
- [Sociality](https://github.com/vigimoy/sociality)
- [Portrait source](https://github.com/vigimoy/html-profile/blob/main/images/My%20Photo%20Profile.png)

Desktop layout and assets were obtained through the Figma integration. On 5 November 2026, the desktop reference and the mobile Figma canvas were visually reviewed. Mobile now uses one-column services with dividers, a skill list without the desktop side marker, full-width experience cards, stacked learning notes, and one active FAQ card controlled by Prev/Next. The full-screen mobile navigation uses a blurred backdrop. The navbar remains fixed as requested.

The Figma Starter quota still prevents fresh machine-readable mobile design context. The browser review verifies the visible layout, not a pixel-perfect measurement of every property. Personal content, supplied photos, additional social links, skill status labels, workflow cards, and actual project screenshots intentionally differ from the sample. See DESIGN-REVIEW.md for verification and remaining limits.

## Deployment and submission

Vercel project: `portfolio-vigimoy` in the Vigimoy team. Framework: Next.js; Node.js 24; root directory: repository root. No environment variables are required. The production build uses a direct upload of the tracked files from commit `da3f8b3`. To deploy future pushes automatically, link the repository in Vercel.

The Slack announcement specifies 6 November 2026 at 23:59 WIB. The older PDF date differs. Submission requires a public GitHub repository and a live demo. Use the portfolio and repository links above for submission. See SUBMISSION.md for the handoff checklist and LIVE-DEMO.md for project hosting records.
