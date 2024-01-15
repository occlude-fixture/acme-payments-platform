-- migration 0190
BEGIN;
CREATE INDEX IF NOT EXISTS merchants_period_start_idx_190 ON merchants (period_start);
COMMIT;
