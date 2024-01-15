-- migration 0036
BEGIN;
CREATE INDEX IF NOT EXISTS invoices_region_idx_36 ON invoices (region);
COMMIT;
