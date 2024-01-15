-- migration 0176
BEGIN;
ALTER TABLE webhook_deliveries ADD COLUMN IF NOT EXISTS region TEXT;
COMMIT;
