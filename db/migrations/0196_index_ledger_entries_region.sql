-- migration 0196
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_entries_region_idx_196 ON ledger_entries (region);
COMMIT;
