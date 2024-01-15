-- migration 0185
BEGIN;
UPDATE notifications SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-06-01';
COMMIT;
