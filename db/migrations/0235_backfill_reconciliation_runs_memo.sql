-- migration 0235
BEGIN;
UPDATE reconciliation_runs SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-08-01';
COMMIT;
