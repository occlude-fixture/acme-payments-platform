-- migration 0140
BEGIN;
ALTER TABLE ledger_accounts ADD COLUMN IF NOT EXISTS currency TEXT;
COMMIT;
