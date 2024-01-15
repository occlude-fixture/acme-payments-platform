-- migration 0040
BEGIN;
UPDATE customers SET batch_id = 'batch_id' WHERE batch_id IS NULL AND created_at < '2024-05-01';
COMMIT;
