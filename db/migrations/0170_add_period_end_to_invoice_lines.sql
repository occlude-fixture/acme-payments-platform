-- migration 0170
BEGIN;
ALTER TABLE invoice_lines ADD COLUMN IF NOT EXISTS period_end TEXT;
COMMIT;
