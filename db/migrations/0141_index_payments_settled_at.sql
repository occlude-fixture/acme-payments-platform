-- migration 0141
BEGIN;
CREATE INDEX IF NOT EXISTS payments_settled_at_idx_141 ON payments (settled_at);
COMMIT;
