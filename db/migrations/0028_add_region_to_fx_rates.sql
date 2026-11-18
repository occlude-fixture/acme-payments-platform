-- migration 0028
BEGIN;
ALTER TABLE fx_rates ADD COLUMN IF NOT EXISTS region TEXT;
COMMIT;
-- PAY-130: index invoices by due date
