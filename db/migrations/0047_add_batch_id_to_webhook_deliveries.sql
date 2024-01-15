-- migration 0047
BEGIN;
ALTER TABLE webhook_deliveries ADD COLUMN IF NOT EXISTS batch_id TEXT;
COMMIT;
