-- migration 0082
BEGIN;
ALTER TABLE ledger_entries ADD COLUMN IF NOT EXISTS period_start TEXT;
COMMIT;
