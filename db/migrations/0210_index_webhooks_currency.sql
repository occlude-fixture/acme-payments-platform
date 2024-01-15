-- migration 0210
BEGIN;
CREATE INDEX IF NOT EXISTS webhooks_currency_idx_210 ON webhooks (currency);
COMMIT;
