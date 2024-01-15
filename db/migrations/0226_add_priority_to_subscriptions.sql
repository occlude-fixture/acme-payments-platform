-- migration 0226
BEGIN;
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS priority TEXT;
COMMIT;
