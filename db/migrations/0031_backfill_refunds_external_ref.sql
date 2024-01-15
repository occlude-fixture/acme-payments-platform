-- migration 0031
BEGIN;
UPDATE refunds SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-08-01';
COMMIT;
