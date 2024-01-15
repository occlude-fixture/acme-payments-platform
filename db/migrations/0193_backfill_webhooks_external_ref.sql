-- migration 0193
BEGIN;
UPDATE webhooks SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-02-01';
COMMIT;
