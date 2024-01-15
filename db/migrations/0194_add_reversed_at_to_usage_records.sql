-- migration 0194
BEGIN;
ALTER TABLE usage_records ADD COLUMN IF NOT EXISTS reversed_at TEXT;
COMMIT;
