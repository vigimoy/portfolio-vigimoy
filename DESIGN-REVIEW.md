# Layout review — updated 6 November 2026

Scope: layout alignment (point 1), supplied project screenshots and public repository links (point 2), and the requested FAQ/practice cleanup. The final portfolio and project links are in [SUBMISSION.md](SUBMISSION.md).

## References

- Desktop Figma frame: `25414:1253`, file `AmHNYFhCvbJH82frlGLWKi`.
- Mobile Figma frame: `25423:2015`, inspected at 100% through the Figma browser canvas.
- Existing desktop design context, exported reference image, and asset URLs from the Figma integration.

## Implemented

- Kept the requested fixed, blurred navbar, Vigimoy name, Foto1/Foto2, original circular portrait, and social links. The removed badge caption remains absent.
- Skills: restored compact icon/name/status rows, desktop two-column composition, partial vertical marker, and bottom-aligned contact button. Mobile removes the marker and stacks the introduction above the list.
- About: used the supplied Figma service icons at their intrinsic SVG dimensions. Mobile services stack vertically with separators.
- Approach: semantic three-column table, seven rows, highlighted middle column, circular status icons, and subtle grid/glow background. Mobile uses a wider first column.
- Projects: compact three-column desktop cards, two columns on tablet, and one column on mobile. Expandable details retain the descriptions and links. Covers now use supplied WebP screenshots; Movie Explorer and Foody link to public personal repositories. Live demo links appear only where configured.
- Journey: horizontal cards with controls; mobile shows one full-width card. Buttons move by the actual card width and disable at either end.
- Learning notes: tall left card, wide upper-right card, and two smaller lower-right cards on desktop; stacked cards on mobile. The requested update removes portraits, repeated personal signatures, and quotation decorations. Concise Design / Build / Refine cards explain the development process, with a shorter overall section.
- FAQ: desktop horizontal expanding cards; mobile shows only the active full-width card. Prev/Next update the answer, and all personal portraits have been removed; the message icon remains.
- Mobile menu: full-screen blurred backdrop, brand/close row, and a vertical link list.
- Respected reduced-motion preference for carousel and FAQ scrolling.

## Verified

- Production build and TypeScript compilation pass.
- Browser checks at 1440, 768, 393, and 320 CSS pixels; no document-wide horizontal overflow. The 320px check also found no clipped headings, cards, or table content.
- Mobile navigation opens, follows section links, and closes.
- Project details expand and collapse.
- FAQ changes the answer and exposes one visible card on mobile.
- Experience carousel reaches the last card, disables Next, and can move back with Previous.
- All page images loaded successfully at the desktop check. Figma service, TikTok, message, and quote SVGs render at their intended dimensions.
- No browser console errors were recorded during the final desktop check.

## Intentional differences and limits

- Personal text and photos replace the sample identity.
- "In use" replaces unsupported numerical skill ratings. React/Next.js, Tailwind, and Git entries follow this portfolio's existing skills rather than copying database skills from the sample.
- The table describes current practice and ongoing refinement; it does not claim other developers lack those skills.
- Learning notes replace fictional customer endorsements, ratings, conversion claims, and employment logos.
- Project screenshots and live-demo links for Movie Explorer and Foody are complete.
- The desktop and mobile structures were visually compared. Fresh numerical mobile design-context retrieval remains blocked by the Figma Starter quota, so this is not a claim of pixel-perfect equivalence.

## Latest verification — 6 November 2026

- `npm run build` and `npm run typecheck` passed after this update.
- Browser checks at widths 1440, 768, 393, and 320 found no horizontal page overflow.
- All three project screenshot images decoded successfully; cover links match the supplied public repositories and existing Sociality demo.
- Project details open and close; FAQ Next changes the selected answer. Mobile shows exactly one FAQ card.
- No personal portrait images remain in FAQ; no images or repeated signatures remain in Built Through Practice.
- No browser page errors. The reduced-motion verification preference produced only the expected Motion development warning.
- New desktop project/practice and mobile practice/FAQ screenshots were captured in the parent outputs directory.
- App repositories and example environment files were inspected for hosting advice. The two external apps were not deployed or functionally retested as part of this portfolio update.

## Live deployment verification — 6 November 2026

- Movie Explorer and Foody both reached Vercel production READY in the Vigimoy team and respond publicly without Vercel login.
- Movie Explorer: home loads TMDB data; direct `/movie/155` returns HTTP 200; favorites persist after refresh; searching Interstellar returns the matching movie. Mobile at 393px has no horizontal overflow. No browser page errors.
- Foody: home and restaurant search load the real API; `/resto/1` renders menu/reviews and survives refresh; unauthenticated `/cart` redirects to login. Mobile at 393px has no horizontal overflow. No browser page errors.
- A public restaurant logo returned 502 through Vercel image optimization. Logos from that host now load directly, and a fresh page check found no failed images or fallback placeholders. The fix is committed in the public Foody repository.
- Runtime error/fatal log scans found no matching entries during verification. This is a point-in-time check, not ongoing monitoring.
- Signed-in checkout, order creation, and payment actions were not executed. No test account or order was created.
- Portfolio TypeScript check passed after adding demo URLs. Browser inspection confirmed both Live demo links and repository links in the project cards.
- Both deployments use source uploads. GitHub automatic deployment is not connected yet.
