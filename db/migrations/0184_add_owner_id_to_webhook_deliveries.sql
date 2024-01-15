-- migration 0184
BEGIN;
ALTER TABLE webhook_deliveries ADD COLUMN IF NOT EXISTS owner_id TEXT;
COMMIT;
