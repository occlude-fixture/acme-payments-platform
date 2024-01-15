-- migration 0132
BEGIN;
CREATE INDEX IF NOT EXISTS invoices_version_idx_132 ON invoices (version);
COMMIT;
