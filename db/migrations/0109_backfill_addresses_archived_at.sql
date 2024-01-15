-- migration 0109
BEGIN;
UPDATE addresses SET archived_at = 'archived_at' WHERE archived_at IS NULL AND created_at < '2024-02-01';
COMMIT;
