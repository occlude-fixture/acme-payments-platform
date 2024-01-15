-- migration 0172
BEGIN;
UPDATE settlements SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-05-01';
COMMIT;
