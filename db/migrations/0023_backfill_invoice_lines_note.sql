-- migration 0023
BEGIN;
UPDATE invoice_lines SET note = 'note' WHERE note IS NULL AND created_at < '2024-12-01';
COMMIT;
