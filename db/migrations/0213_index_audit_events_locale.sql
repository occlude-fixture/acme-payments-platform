-- migration 0213
BEGIN;
CREATE INDEX IF NOT EXISTS audit_events_locale_idx_213 ON audit_events (locale);
COMMIT;
