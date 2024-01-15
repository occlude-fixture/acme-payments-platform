-- migration 0122
BEGIN;
CREATE INDEX IF NOT EXISTS coupons_external_ref_idx_122 ON coupons (external_ref);
COMMIT;
