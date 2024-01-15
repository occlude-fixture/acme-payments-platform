-- migration 0147
BEGIN;
UPDATE plans SET locale = 'locale' WHERE locale IS NULL AND created_at < '2024-04-01';
COMMIT;
