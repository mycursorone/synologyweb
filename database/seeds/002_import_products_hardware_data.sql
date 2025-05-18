-- Seed: Import products_hardware data
-- Description: Imports products_hardware data from SQL backup
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Import products_hardware data from SQL backup
\i '/var/www/synologyweb/database/backups/products_hardware_rows.sql'

-- Display import results
SELECT COUNT(*) AS imported_products_hardware_count FROM products_hardware;
