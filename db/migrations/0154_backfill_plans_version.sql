-- migration 0154
BEGIN;
UPDATE plans SET version = 'version' WHERE version IS NULL AND created_at < '2024-11-01';
COMMIT;
