# payments-platform

Acme's billing, ledger and payouts monorepo: the merchant dashboard (`src/web`), shared UI (`src/components`), domain libraries (`src/lib`), Node services (`src/services`), database migrations (`db/`) and infrastructure (`infra/`).

| Command | Does |
|---|---|
| `npm run dev` | Dashboard on http://localhost:5173 with the service layer mounted under `/api` |
| `npm test` | Whole suite (Vitest) |
| `npm run build` | Production bundle in `dist/` |
| `npm run typecheck` | Type check with declaration emit |

Billing and settlement code is in PCI scope. Changes to `src/lib/billing` need a review from the payments team.

chore: tidy the README
