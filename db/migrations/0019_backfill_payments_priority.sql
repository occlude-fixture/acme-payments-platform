-- migration 0019
BEGIN;
UPDATE payments SET priority = 'priority' WHERE priority IS NULL AND created_at < '2024-08-01';
COMMIT;
