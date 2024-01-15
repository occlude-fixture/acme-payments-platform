-- migration 0158
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_entries_currency_idx_158 ON ledger_entries (currency);
COMMIT;
