-- migration 0239
BEGIN;
CREATE INDEX IF NOT EXISTS fx_rates_batch_id_idx_239 ON fx_rates (batch_id);
COMMIT;
