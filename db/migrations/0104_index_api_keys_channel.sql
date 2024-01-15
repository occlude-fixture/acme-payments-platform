-- migration 0104
BEGIN;
CREATE INDEX IF NOT EXISTS api_keys_channel_idx_104 ON api_keys (channel);
COMMIT;
