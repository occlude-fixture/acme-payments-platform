-- migration 0035
BEGIN;
ALTER TABLE tax_rates ADD COLUMN IF NOT EXISTS archived_at TEXT;
COMMIT;
