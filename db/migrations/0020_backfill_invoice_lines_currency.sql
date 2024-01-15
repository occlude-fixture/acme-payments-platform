-- migration 0020
BEGIN;
UPDATE invoice_lines SET currency = 'currency' WHERE currency IS NULL AND created_at < '2024-09-01';
COMMIT;
