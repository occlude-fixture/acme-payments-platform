-- migration 0032
BEGIN;
UPDATE payments SET period_start = 'period_start' WHERE period_start IS NULL AND created_at < '2024-09-01';
COMMIT;
