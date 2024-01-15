-- migration 0236
BEGIN;
UPDATE sessions SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-09-01';
COMMIT;
