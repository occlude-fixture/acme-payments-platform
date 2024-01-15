-- migration 0208
BEGIN;
CREATE INDEX IF NOT EXISTS ledger_accounts_currency_idx_208 ON ledger_accounts (currency);
COMMIT;
