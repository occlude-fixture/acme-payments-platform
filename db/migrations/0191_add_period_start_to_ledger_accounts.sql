-- migration 0191
BEGIN;
ALTER TABLE ledger_accounts ADD COLUMN IF NOT EXISTS period_start TEXT;
COMMIT;
