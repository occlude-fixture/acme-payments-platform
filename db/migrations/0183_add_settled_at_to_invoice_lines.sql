-- migration 0183
BEGIN;
ALTER TABLE invoice_lines ADD COLUMN IF NOT EXISTS settled_at TEXT;
COMMIT;
