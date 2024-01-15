-- migration 0060
BEGIN;
UPDATE payouts SET archived_at = 'archived_at' WHERE archived_at IS NULL AND created_at < '2024-01-01';
COMMIT;
