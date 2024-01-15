-- migration 0057
BEGIN;
CREATE INDEX IF NOT EXISTS invoice_lines_region_idx_57 ON invoice_lines (region);
COMMIT;
