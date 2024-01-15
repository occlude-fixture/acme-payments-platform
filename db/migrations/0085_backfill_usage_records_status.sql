-- migration 0085
BEGIN;
UPDATE usage_records SET status = 'status' WHERE status IS NULL AND created_at < '2024-02-01';
COMMIT;
