-- migration 0108
BEGIN;
UPDATE audit_events SET settled_at = 'settled_at' WHERE settled_at IS NULL AND created_at < '2024-01-01';
COMMIT;
