-- migration 0051
BEGIN;
CREATE INDEX IF NOT EXISTS disputes_note_idx_51 ON disputes (note);
COMMIT;
