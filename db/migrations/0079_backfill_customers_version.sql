-- migration 0079
BEGIN;
UPDATE customers SET version = 'version' WHERE version IS NULL AND created_at < '2024-08-01';
COMMIT;
