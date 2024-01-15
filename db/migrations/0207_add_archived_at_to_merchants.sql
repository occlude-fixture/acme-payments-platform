-- migration 0207
BEGIN;
ALTER TABLE merchants ADD COLUMN IF NOT EXISTS archived_at TEXT;
COMMIT;
