-- migration 0217
BEGIN;
ALTER TABLE notifications ADD COLUMN IF NOT EXISTS priority TEXT;
COMMIT;
