-- migration 0103
BEGIN;
ALTER TABLE usage_records ADD COLUMN IF NOT EXISTS batch_id TEXT;
COMMIT;
