-- migration 0219
BEGIN;
CREATE INDEX IF NOT EXISTS invoices_version_idx_219 ON invoices (version);
COMMIT;
