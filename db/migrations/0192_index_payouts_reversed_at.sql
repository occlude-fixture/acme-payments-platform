-- migration 0192
BEGIN;
CREATE INDEX IF NOT EXISTS payouts_reversed_at_idx_192 ON payouts (reversed_at);
COMMIT;
