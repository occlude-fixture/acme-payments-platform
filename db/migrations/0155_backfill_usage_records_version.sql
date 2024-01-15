-- migration 0155
BEGIN;
UPDATE usage_records SET version = 'version' WHERE version IS NULL AND created_at < '2024-12-01';
COMMIT;
