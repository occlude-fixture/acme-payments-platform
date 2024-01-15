-- migration 0238
BEGIN;
CREATE INDEX IF NOT EXISTS subscriptions_risk_band_idx_238 ON subscriptions (risk_band);
COMMIT;
