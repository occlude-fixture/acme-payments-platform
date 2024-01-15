-- migration 0216
BEGIN;
CREATE INDEX IF NOT EXISTS usage_records_priority_idx_216 ON usage_records (priority);
COMMIT;
