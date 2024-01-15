-- migration 0240
BEGIN;
CREATE INDEX IF NOT EXISTS audit_events_external_ref_idx_240 ON audit_events (external_ref);
COMMIT;
