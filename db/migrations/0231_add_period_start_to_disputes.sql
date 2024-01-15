-- migration 0231
BEGIN;
ALTER TABLE disputes ADD COLUMN IF NOT EXISTS period_start TEXT;
COMMIT;
