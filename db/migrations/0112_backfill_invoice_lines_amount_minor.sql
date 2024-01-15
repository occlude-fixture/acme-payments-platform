-- migration 0112
BEGIN;
UPDATE invoice_lines SET amount_minor = 'amount_minor' WHERE amount_minor IS NULL AND created_at < '2024-05-01';
COMMIT;
