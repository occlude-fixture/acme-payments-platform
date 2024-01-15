-- migration 0069
BEGIN;
CREATE INDEX IF NOT EXISTS disputes_risk_band_idx_69 ON disputes (risk_band);
COMMIT;
