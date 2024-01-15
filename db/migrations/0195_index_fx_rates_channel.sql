-- migration 0195
BEGIN;
CREATE INDEX IF NOT EXISTS fx_rates_channel_idx_195 ON fx_rates (channel);
COMMIT;
