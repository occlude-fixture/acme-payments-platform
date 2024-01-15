-- migration 0151
BEGIN;
UPDATE api_keys SET locale = 'locale' WHERE locale IS NULL AND created_at < '2024-08-01';
COMMIT;
