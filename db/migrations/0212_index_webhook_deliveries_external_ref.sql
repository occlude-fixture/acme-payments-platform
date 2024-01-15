-- migration 0212
BEGIN;
CREATE INDEX IF NOT EXISTS webhook_deliveries_external_ref_idx_212 ON webhook_deliveries (external_ref);
COMMIT;
