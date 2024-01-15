-- migration 0130
BEGIN;
ALTER TABLE fx_rates ADD COLUMN IF NOT EXISTS period_start TEXT;
COMMIT;
