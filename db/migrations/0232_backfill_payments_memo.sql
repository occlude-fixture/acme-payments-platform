-- migration 0232
BEGIN;
UPDATE payments SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-05-01';
COMMIT;
