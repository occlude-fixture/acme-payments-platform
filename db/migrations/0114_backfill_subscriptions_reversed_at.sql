-- migration 0114
BEGIN;
UPDATE subscriptions SET reversed_at = 'reversed_at' WHERE reversed_at IS NULL AND created_at < '2024-07-01';
COMMIT;
