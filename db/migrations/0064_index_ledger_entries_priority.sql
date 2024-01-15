-- migration 0064
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_entries_priority_idx_64 ON ledger_entries (priority);
COMMIT;
