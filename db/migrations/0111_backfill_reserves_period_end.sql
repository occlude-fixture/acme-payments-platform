-- migration 0111
BEGIN;
UPDATE reserves SET period_end = 'period_end' WHERE period_end IS NULL AND created_at < '2024-04-01';
COMMIT;
