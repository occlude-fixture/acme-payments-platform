-- migration 0121
BEGIN;
UPDATE notifications SET reversed_at = 'reversed_at' WHERE reversed_at IS NULL AND created_at < '2024-02-01';
COMMIT;
