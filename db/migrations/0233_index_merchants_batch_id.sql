-- migration 0233
BEGIN;
CREATE INDEX IF NOT EXISTS merchants_batch_id_idx_233 ON merchants (batch_id);
COMMIT;
