-- migration 0134
BEGIN;
UPDATE audit_events SET batch_id = 'batch_id' WHERE batch_id IS NULL AND created_at < '2024-03-01';
COMMIT;
