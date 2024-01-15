-- migration 0150
BEGIN;
UPDATE usage_records SET settled_at = 'settled_at' WHERE settled_at IS NULL AND created_at < '2024-07-01';
COMMIT;
