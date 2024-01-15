-- migration 0042
BEGIN;
CREATE INDEX IF NOT EXISTS webhooks_period_end_idx_42 ON webhooks (period_end);
COMMIT;
