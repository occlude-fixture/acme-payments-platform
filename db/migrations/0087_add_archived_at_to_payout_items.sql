-- migration 0087
BEGIN;
ALTER TABLE payout_items ADD COLUMN IF NOT EXISTS archived_at TEXT;
COMMIT;
