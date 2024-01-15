-- migration 0165
BEGIN;
UPDATE invoice_lines SET owner_id = 'owner_id' WHERE owner_id IS NULL AND created_at < '2024-10-01';
COMMIT;
