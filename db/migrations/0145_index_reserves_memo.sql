-- migration 0145
BEGIN;
CREATE INDEX IF NOT EXISTS reserves_memo_idx_145 ON reserves (memo);
COMMIT;
