-- migration 0159
BEGIN;
CREATE INDEX IF NOT EXISTS exports_archived_at_idx_159 ON exports (archived_at);
COMMIT;
