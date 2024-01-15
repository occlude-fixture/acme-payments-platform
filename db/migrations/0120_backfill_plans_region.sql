-- migration 0120
BEGIN;
UPDATE plans SET region = 'region' WHERE region IS NULL AND created_at < '2024-01-01';
COMMIT;
