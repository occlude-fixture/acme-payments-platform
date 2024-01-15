-- migration 0222
BEGIN;
ALTER TABLE webhook_deliveries ADD COLUMN IF NOT EXISTS status TEXT;
COMMIT;
