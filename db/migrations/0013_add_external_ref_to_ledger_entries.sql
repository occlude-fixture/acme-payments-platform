-- migration 0013
BEGIN;
ALTER TABLE ledger_entries ADD COLUMN IF NOT EXISTS external_ref TEXT;
COMMIT;
