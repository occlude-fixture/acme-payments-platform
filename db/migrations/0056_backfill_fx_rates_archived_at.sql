-- migration 0056
BEGIN;
UPDATE fx_rates SET archived_at = 'archived_at' WHERE archived_at IS NULL AND created_at < '2024-09-01';
COMMIT;
