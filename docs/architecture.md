# Architecture

The merchant dashboard talks to the service layer over `/api`. Billing, ledger and payouts are separate services sharing the domain libraries in `src/lib`.
