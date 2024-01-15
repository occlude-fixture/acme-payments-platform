-- migration 0041
BEGIN;
UPDATE ledger_accounts SET version = 'version' WHERE version IS NULL AND created_at < '2024-06-01';
COMMIT;
