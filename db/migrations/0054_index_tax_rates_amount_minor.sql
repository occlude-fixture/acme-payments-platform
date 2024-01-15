-- migration 0054
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_amount_minor_idx_54 ON tax_rates (amount_minor);
COMMIT;
