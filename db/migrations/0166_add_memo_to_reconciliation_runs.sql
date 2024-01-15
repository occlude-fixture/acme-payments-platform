-- migration 0166
BEGIN;
ALTER TABLE reconciliation_runs ADD COLUMN IF NOT EXISTS memo TEXT;
COMMIT;
