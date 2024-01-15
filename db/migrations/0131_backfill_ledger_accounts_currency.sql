-- migration 0131
BEGIN;
UPDATE ledger_accounts SET currency = 'currency' WHERE currency IS NULL AND created_at < '2024-12-01';
COMMIT;
