-- migration 0116
BEGIN;
UPDATE addresses SET period_end = 'period_end' WHERE period_end IS NULL AND created_at < '2024-09-01';
COMMIT;
