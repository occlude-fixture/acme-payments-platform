-- migration 0220
BEGIN;
CREATE INDEX IF NOT EXISTS webhook_deliveries_external_ref_idx_220 ON webhook_deliveries (external_ref);
COMMIT;
