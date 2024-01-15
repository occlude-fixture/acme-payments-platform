-- migration 0067
BEGIN;
CREATE INDEX IF NOT EXISTS sessions_period_start_idx_67 ON sessions (period_start);
COMMIT;
