-- migration 0014
BEGIN;
UPDATE ledger_accounts SET priority = 'priority' WHERE priority IS NULL AND created_at < '2024-03-01';
COMMIT;
