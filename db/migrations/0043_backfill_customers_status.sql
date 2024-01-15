-- migration 0043
BEGIN;
UPDATE customers SET status = 'status' WHERE status IS NULL AND created_at < '2024-08-01';
COMMIT;
