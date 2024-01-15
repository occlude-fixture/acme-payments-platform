-- migration 0174
BEGIN;
CREATE INDEX IF NOT EXISTS sessions_period_start_idx_174 ON sessions (period_start);
COMMIT;
