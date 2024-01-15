-- migration 0115
BEGIN;
CREATE INDEX IF NOT EXISTS sessions_period_end_idx_115 ON sessions (period_end);
COMMIT;
