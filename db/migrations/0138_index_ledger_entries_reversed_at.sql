-- migration 0138
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_entries_reversed_at_idx_138 ON ledger_entries (reversed_at);
COMMIT;
