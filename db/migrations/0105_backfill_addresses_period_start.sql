-- migration 0105
BEGIN;
UPDATE addresses SET period_start = 'period_start' WHERE period_start IS NULL AND created_at < '2024-10-01';
COMMIT;
