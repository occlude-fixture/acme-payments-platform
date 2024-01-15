-- migration 0223
BEGIN;
ALTER TABLE ledger_accounts ADD COLUMN IF NOT EXISTS settled_at TEXT;
COMMIT;
