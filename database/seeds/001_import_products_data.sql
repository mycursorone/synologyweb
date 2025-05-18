-- Seed: Import products data
-- Description: Imports products data from CSV backup
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Import products data from CSV
\copy products(id, name, description, cover_image, spec_pdf_url, is_active, description_i18N, software_space, hardware_space, created_at, updated_at) FROM '/var/www/synologyweb/database/backups/products_rows.csv' WITH CSV HEADER;

-- Display import results
SELECT COUNT(*) AS imported_products_count FROM products;
