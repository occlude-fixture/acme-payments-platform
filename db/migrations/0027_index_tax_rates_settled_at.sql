-- migration 0027
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_settled_at_idx_27 ON tax_rates (settled_at);
COMMIT;
