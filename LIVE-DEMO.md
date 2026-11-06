# Live demo setup

Movie Explorer and Foody were deployed to production in the Vigimoy Vercel team on 6 November 2026 (WIB).

- Movie Explorer: https://movie-explorer-vigimoy.vercel.app
- Foody: https://foody-vigimoy.vercel.app
- The portfolio's project cards now include both demo links and public source repository links.

Deployment used source uploads because Vercel's GitHub Login Connection is not configured. Git pushes currently do not trigger automatic deployment. To enable that later, connect GitHub in Vercel and link each existing project to its matching repository. The portfolio release and its public links are documented in [SUBMISSION.md](SUBMISSION.md).

| Project | Framework preset | Build command | Output directory |
| --- | --- | --- | --- |
| Movie Explorer | Vite | `npm run build` | `dist` |
| Foody | Next.js | `npm run build` | Framework default |
| This portfolio | Next.js | `npm run build` | Framework default |

Import each supplied GitHub repository using its main branch and repository root. For the portfolio, publish the contents of this directory as the repository root, or select its actual subdirectory in Vercel.

## Movie Explorer

Repository: https://github.com/vigimoy/week-9-movie-explorer-app-vigimoy

Set these environment variables before building, following the repository's `.env.example`:

- `VITE_TMDB_API_KEY`: your TMDB API key.
- `VITE_TMDB_BASE_URL`: `https://api.themoviedb.org/3`.
- `VITE_TMDB_IMAGE_BASE_URL`: `https://image.tmdb.org/t/p`.

The repository also supports `VITE_TMDB_ACCESS_TOKEN` as an alternative. Vite's `VITE_` variables are included in browser code; entering them in the hosting dashboard does not make them server-only secrets.

The following `vercel.json` was added to the Movie Explorer repository (commit `385656a`) so direct visits and refreshes on React Router routes load the app:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Verified: home data, search, direct movie details, and favorites persisting after refresh.

## Foody

Repository: https://github.com/vigimoy/week-10-restaurant-app-vigimoy

Set `NEXT_PUBLIC_API_BASE_URL` to `https://be-restaurant-production.up.railway.app`, as specified by its `.env.example`. The existing restaurant API remains an external dependency. Use the Next.js defaults; do not apply Movie Explorer's SPA rewrite to this project.

Verified: home data, restaurant search, detail/menu/reviews, detail refresh, and unauthenticated cart redirect to login. Signed-in ordering was not exercised. Commit `692fdcc` fixes public logo loading on Vercel by loading that logo host directly. Other images retain Next.js optimization.

## Connect the live demos

Both verified public URLs are now configured in each project's `demo` field in `lib/content.ts`. The portfolio shows both View repository and Live demo. This portfolio itself requires no environment variables.

Official references: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

## Deployment records

| Project | Production deployment | Equivalent source revision | Status |
| --- | --- | --- | --- |
| Movie Explorer | `dpl_9QEuKxrx2uKAGn54jTcMhtE38YfH` | `385656af219e33ec5bece324f7aaf7bcca66a7b7` | READY |
| Foody | `dpl_7bP5DFg72612Fe2H3nrZsS1qiL6a` | `692fdccbcc2d99835c072c4394e31dfa91df211a` | READY |

Vercel team: `team_jbF4n97VTkXS3eGYagk8Qoxz` (Vigimoy). Runtime: Node.js 24. Build logs report successful production builds; initial Movie Explorer build completed in 13 seconds, final Foody deployment reached READY about 14 seconds after build start. Source uploads exclude Git history, local environment files, tests, and documentation. Required application environment values are configured separately in Vercel.

No runtime error/fatal entries were found in the post-deploy log scans. No additional monitoring integration or drain was configured in this task.
