-- migration 0162
BEGIN;
CREATE INDEX IF NOT EXISTS reports_note_idx_162 ON reports (note);
COMMIT;
