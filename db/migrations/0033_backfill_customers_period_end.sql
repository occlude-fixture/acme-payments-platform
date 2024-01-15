-- migration 0033
BEGIN;
UPDATE customers SET period_end = 'period_end' WHERE period_end IS NULL AND created_at < '2024-10-01';
COMMIT;
