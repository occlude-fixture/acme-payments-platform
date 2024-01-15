-- migration 0094
BEGIN;
UPDATE customers SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-11-01';
COMMIT;
