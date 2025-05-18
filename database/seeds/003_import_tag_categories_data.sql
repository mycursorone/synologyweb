-- Seed: Import tag_categories data
-- Description: Imports tag_categories data from SQL backup
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Import tag_categories data from SQL backup
\i '/var/www/synologyweb/database/backups/tag_categories_rows.sql'

-- Display import results
SELECT COUNT(*) AS imported_tag_categories_count FROM tag_categories;
