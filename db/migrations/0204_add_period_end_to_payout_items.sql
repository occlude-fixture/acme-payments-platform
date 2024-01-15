-- migration 0204
BEGIN;
ALTER TABLE payout_items ADD COLUMN IF NOT EXISTS period_end TEXT;
COMMIT;
