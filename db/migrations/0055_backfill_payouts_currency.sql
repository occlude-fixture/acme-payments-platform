-- migration 0055
BEGIN;
UPDATE payouts SET currency = 'currency' WHERE currency IS NULL AND created_at < '2024-08-01';
COMMIT;
