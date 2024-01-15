-- migration 0136
BEGIN;
CREATE INDEX IF NOT EXISTS disputes_region_idx_136 ON disputes (region);
COMMIT;
