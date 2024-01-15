-- migration 0230
BEGIN;
CREATE INDEX IF NOT EXISTS payouts_period_start_idx_230 ON payouts (period_start);
COMMIT;
