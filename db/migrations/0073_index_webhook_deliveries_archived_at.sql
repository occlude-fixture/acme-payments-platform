-- migration 0073
BEGIN;
CREATE INDEX IF NOT EXISTS webhook_deliveries_archived_at_idx_73 ON webhook_deliveries (archived_at);
COMMIT;
