-- migration 0205
BEGIN;
ALTER TABLE reconciliation_runs ADD COLUMN IF NOT EXISTS channel TEXT;
COMMIT;
