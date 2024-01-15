-- migration 0148
BEGIN;
CREATE INDEX IF NOT EXISTS invoices_external_ref_idx_148 ON invoices (external_ref);
COMMIT;
