-- migration 0044
BEGIN;
UPDATE customers SET region = 'region' WHERE region IS NULL AND created_at < '2024-09-01';
COMMIT;
