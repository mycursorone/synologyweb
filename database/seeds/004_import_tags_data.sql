-- Seed: Import tags data
-- Description: Imports tags data from SQL backup
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Import tags data from SQL backup
\i '/var/www/synologyweb/database/backups/tags_rows.sql'

-- Display import results
SELECT COUNT(*) AS imported_tags_count FROM tags;
