-- migration 0089
BEGIN;
UPDATE plans SET reversed_at = 'reversed_at' WHERE reversed_at IS NULL AND created_at < '2024-06-01';
COMMIT;
