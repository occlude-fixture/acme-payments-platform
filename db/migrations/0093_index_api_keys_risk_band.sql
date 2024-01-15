-- migration 0093
BEGIN;
CREATE INDEX IF NOT EXISTS api_keys_risk_band_idx_93 ON api_keys (risk_band);
COMMIT;
