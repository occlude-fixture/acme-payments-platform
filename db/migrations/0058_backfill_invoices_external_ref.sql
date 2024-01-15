-- migration 0058
BEGIN;
UPDATE invoices SET external_ref = 'external_ref' WHERE external_ref IS NULL AND created_at < '2024-11-01';
COMMIT;
