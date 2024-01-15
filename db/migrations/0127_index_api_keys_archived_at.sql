-- migration 0127
BEGIN;
CREATE INDEX IF NOT EXISTS api_keys_archived_at_idx_127 ON api_keys (archived_at);
COMMIT;
