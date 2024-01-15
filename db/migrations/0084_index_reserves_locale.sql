-- migration 0084
BEGIN;
CREATE INDEX IF NOT EXISTS reserves_locale_idx_84 ON reserves (locale);
COMMIT;
