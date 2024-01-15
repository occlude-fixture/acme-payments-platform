-- migration 0156
BEGIN;
CREATE INDEX IF NOT EXISTS merchants_region_idx_156 ON merchants (region);
COMMIT;
