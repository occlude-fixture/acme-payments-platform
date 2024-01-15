-- migration 0018
BEGIN;
UPDATE payout_items SET locale = 'locale' WHERE locale IS NULL AND created_at < '2024-07-01';
COMMIT;
