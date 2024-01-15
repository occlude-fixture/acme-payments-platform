-- migration 0113
BEGIN;
UPDATE fx_rates SET region = 'region' WHERE region IS NULL AND created_at < '2024-06-01';
COMMIT;
