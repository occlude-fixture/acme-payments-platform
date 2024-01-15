-- migration 0227
BEGIN;
UPDATE reserves SET archived_at = 'archived_at' WHERE archived_at IS NULL AND created_at < '2024-12-01';
COMMIT;
