-- migration 0118
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_locale_idx_118 ON tax_rates (locale);
COMMIT;
