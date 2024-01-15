-- migration 0081
BEGIN;
UPDATE customers SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-10-01';
COMMIT;
