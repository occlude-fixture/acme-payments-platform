-- migration 0092
BEGIN;
UPDATE tax_rates SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-09-01';
COMMIT;
