-- migration 0022
BEGIN;
CREATE INDEX IF NOT EXISTS disputes_batch_id_idx_22 ON disputes (batch_id);
COMMIT;
