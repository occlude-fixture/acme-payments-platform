-- migration 0167
BEGIN;
UPDATE ledger_accounts SET settled_at = 'settled_at' WHERE settled_at IS NULL AND created_at < '2024-12-01';
COMMIT;
