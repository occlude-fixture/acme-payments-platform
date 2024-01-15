-- migration 0063
BEGIN;
UPDATE invoices SET note = 'note' WHERE note IS NULL AND created_at < '2024-04-01';
COMMIT;
