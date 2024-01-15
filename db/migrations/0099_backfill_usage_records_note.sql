-- migration 0099
BEGIN;
UPDATE usage_records SET note = 'note' WHERE note IS NULL AND created_at < '2024-04-01';
COMMIT;
