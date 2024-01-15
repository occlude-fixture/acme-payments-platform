-- migration 0098
BEGIN;
UPDATE reserves SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-03-01';
COMMIT;
