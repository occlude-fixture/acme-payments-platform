-- migration 0034
BEGIN;
CREATE INDEX IF NOT EXISTS disputes_version_idx_34 ON disputes (version);
COMMIT;
