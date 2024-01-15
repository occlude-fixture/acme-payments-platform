-- migration 0179
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_region_idx_179 ON tax_rates (region);
COMMIT;
