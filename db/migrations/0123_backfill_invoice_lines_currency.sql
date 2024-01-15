-- migration 0123
BEGIN;
UPDATE invoice_lines SET currency = 'currency' WHERE currency IS NULL AND created_at < '2024-04-01';
COMMIT;
