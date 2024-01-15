-- migration 0171
BEGIN;
CREATE INDEX IF NOT EXISTS usage_records_period_start_idx_171 ON usage_records (period_start);
COMMIT;
