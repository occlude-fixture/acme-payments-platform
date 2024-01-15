-- migration 0119
BEGIN;
CREATE INDEX IF NOT EXISTS statements_owner_id_idx_119 ON statements (owner_id);
COMMIT;
