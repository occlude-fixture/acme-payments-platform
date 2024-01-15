-- migration 0016
BEGIN;
ALTER TABLE invoice_lines ADD COLUMN IF NOT EXISTS owner_id TEXT;
COMMIT;
