-- migration 0024
BEGIN;
ALTER TABLE invoice_lines ADD COLUMN IF NOT EXISTS attempts TEXT;
COMMIT;
