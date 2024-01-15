-- migration 0161
BEGIN;
CREATE INDEX IF NOT EXISTS tax_rates_note_idx_161 ON tax_rates (note);
COMMIT;
