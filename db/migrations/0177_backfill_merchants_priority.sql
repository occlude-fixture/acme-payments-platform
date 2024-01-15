-- migration 0177
BEGIN;
UPDATE merchants SET priority = 'priority' WHERE priority IS NULL AND created_at < '2024-10-01';
COMMIT;
