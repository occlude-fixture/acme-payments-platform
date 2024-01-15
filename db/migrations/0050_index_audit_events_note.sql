-- migration 0050
BEGIN;
CREATE INDEX IF NOT EXISTS audit_events_note_idx_50 ON audit_events (note);
COMMIT;
