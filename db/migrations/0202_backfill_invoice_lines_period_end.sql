-- migration 0202
BEGIN;
UPDATE invoice_lines SET period_end = 'period_end' WHERE period_end IS NULL AND created_at < '2024-11-01';
COMMIT;
