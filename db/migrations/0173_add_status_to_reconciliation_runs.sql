-- migration 0173
BEGIN;
ALTER TABLE reconciliation_runs ADD COLUMN IF NOT EXISTS status TEXT;
COMMIT;
