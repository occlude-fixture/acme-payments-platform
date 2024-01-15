-- migration 0076
BEGIN;
UPDATE invoices SET period_end = 'period_end' WHERE period_end IS NULL AND created_at < '2024-05-01';
COMMIT;
