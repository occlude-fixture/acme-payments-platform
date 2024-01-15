-- migration 0011
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_entries_period_start_idx_11 ON ledger_entries (period_start);
COMMIT;
