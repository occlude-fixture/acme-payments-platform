-- migration 0200
BEGIN;
CREATE INDEX IF NOT EXISTS invoices_external_ref_idx_200 ON invoices (external_ref);
COMMIT;
