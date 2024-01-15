-- migration 0201
BEGIN;
ALTER TABLE statements ADD COLUMN IF NOT EXISTS period_start TEXT;
COMMIT;
