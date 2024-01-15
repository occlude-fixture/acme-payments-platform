-- migration 0107
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_owner_id_idx_107 ON tax_rates (owner_id);
COMMIT;
