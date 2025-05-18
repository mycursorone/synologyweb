-- Seed: Import product_tags data
-- Description: Imports product_tags data from SQL backup
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Import product_tags data from SQL backup
\i '/var/www/synologyweb/database/backups/product_tags_rows.sql'

-- Display import results
SELECT COUNT(*) AS imported_product_tags_count FROM product_tags;
