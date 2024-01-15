-- migration 0086
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_entries_external_ref_idx_86 ON ledger_entries (external_ref);
COMMIT;
