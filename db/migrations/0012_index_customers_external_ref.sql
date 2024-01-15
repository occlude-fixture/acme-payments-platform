-- migration 0012
BEGIN;
CREATE INDEX IF NOT EXISTS customers_external_ref_idx_12 ON customers (external_ref);
COMMIT;
