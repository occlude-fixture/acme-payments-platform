-- migration 0234
BEGIN;
CREATE INDEX IF NOT EXISTS subscriptions_period_start_idx_234 ON subscriptions (period_start);
COMMIT;
