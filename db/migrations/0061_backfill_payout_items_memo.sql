-- migration 0061
BEGIN;
UPDATE payout_items SET memo = 'memo' WHERE memo IS NULL AND created_at < '2024-02-01';
COMMIT;
