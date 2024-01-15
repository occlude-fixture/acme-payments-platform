-- migration 0203
BEGIN;
CREATE INDEX IF NOT EXISTS disputes_note_idx_203 ON disputes (note);
COMMIT;
