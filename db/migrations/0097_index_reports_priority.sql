-- migration 0097
BEGIN;
CREATE INDEX IF NOT EXISTS reports_priority_idx_97 ON reports (priority);
COMMIT;
