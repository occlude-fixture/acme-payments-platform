-- migration 0211
BEGIN;
CREATE INDEX IF NOT EXISTS coupons_region_idx_211 ON coupons (region);
COMMIT;
