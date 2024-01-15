-- migration 0039
BEGIN;
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS reversed_at TEXT;
COMMIT;
