-- migration 0237
BEGIN;
ALTER TABLE reserves ADD COLUMN IF NOT EXISTS amount_minor TEXT;
COMMIT;
