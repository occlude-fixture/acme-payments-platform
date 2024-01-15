-- migration 0074
BEGIN;
CREATE INDEX IF NOT EXISTS invoice_lines_archived_at_idx_74 ON invoice_lines (archived_at);
COMMIT;
