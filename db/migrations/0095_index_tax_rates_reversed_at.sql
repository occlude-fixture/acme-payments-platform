-- migration 0095
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_reversed_at_idx_95 ON tax_rates (reversed_at);
COMMIT;
