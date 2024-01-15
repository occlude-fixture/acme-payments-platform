-- migration 0143
BEGIN;
UPDATE reports SET risk_band = 'risk_band' WHERE risk_band IS NULL AND created_at < '2024-12-01';
COMMIT;
