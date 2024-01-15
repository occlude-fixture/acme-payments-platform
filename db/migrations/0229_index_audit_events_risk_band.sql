-- migration 0229
BEGIN;
CREATE INDEX IF NOT EXISTS audit_events_risk_band_idx_229 ON audit_events (risk_band);
COMMIT;
