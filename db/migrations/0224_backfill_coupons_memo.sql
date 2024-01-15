-- migration 0224
BEGIN;
UPDATE coupons SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-09-01';
COMMIT;
