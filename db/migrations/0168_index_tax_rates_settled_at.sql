-- migration 0168
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_settled_at_idx_168 ON tax_rates (settled_at);
COMMIT;
