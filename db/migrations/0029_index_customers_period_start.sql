-- migration 0029
BEGIN;
CREATE INDEX IF NOT EXISTS customers_period_start_idx_29 ON customers (period_start);
COMMIT;
