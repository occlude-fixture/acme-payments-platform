-- migration 0164
BEGIN;
CREATE INDEX IF NOT EXISTS payout_items_period_start_idx_164 ON payout_items (period_start);
COMMIT;
