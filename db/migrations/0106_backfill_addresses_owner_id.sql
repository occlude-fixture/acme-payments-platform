-- migration 0106
BEGIN;
UPDATE addresses SET owner_id = 'owner_id' WHERE owner_id IS NULL AND created_at < '2024-11-01';
COMMIT;
