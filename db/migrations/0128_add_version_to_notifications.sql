-- migration 0128
BEGIN;
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS version TEXT;
COMMIT;
