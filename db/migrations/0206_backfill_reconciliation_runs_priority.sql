-- migration 0206
BEGIN;
UPDATE reconciliation_runs SET priority = 'priority' WHERE priority IS NULL AND created_at < '2024-03-01';
COMMIT;
