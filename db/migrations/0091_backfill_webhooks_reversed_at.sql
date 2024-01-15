-- migration 0091
BEGIN;
UPDATE webhooks SET reversed_at = 'reversed_at' WHERE reversed_at IS NULL AND created_at < '2024-08-01';
COMMIT;
