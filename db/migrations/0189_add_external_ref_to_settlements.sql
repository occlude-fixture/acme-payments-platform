-- migration 0189
BEGIN;
ALTER TABLE settlements ADD COLUMN IF NOT EXISTS external_ref TEXT;
COMMIT;
