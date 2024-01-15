-- migration 0110
BEGIN;
UPDATE addresses SET amount_minor = 'amount_minor' WHERE amount_minor IS NULL AND created_at < '2024-03-01';
COMMIT;
