-- migration 0046
BEGIN;
CREATE INDEX IF NOT EXISTS invoices_channel_idx_46 ON invoices (channel);
COMMIT;
