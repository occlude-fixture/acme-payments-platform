-- migration 0080
BEGIN;
ALTER TABLE ledger_entries ADD COLUMN IF NOT EXISTS risk_band TEXT;
COMMIT;
