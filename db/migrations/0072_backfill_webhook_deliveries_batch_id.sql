-- migration 0072
BEGIN;
UPDATE webhook_deliveries SET batch_id = 'batch_id' WHERE batch_id IS NULL AND created_at < '2024-01-01';
COMMIT;
