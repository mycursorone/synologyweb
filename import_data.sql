-- 导入tag_categories数据
\copy tag_categories(id, name, description, created_at, updated_at) FROM '/path/to/tag_categories.csv' WITH CSV HEADER;

-- 导入tags数据
\copy tags(id, name, description, category_id, created_at, updated_at) FROM '/path/to/tags.csv' WITH CSV HEADER;

-- 导入products数据
\copy products(id, name, description, price, image_url, is_featured, is_active, created_at, updated_at) FROM '/path/to/products.csv' WITH CSV HEADER;

-- 导入products_hardware数据
\copy products_hardware(id, product_id, cpu, memory, storage, other_specs, created_at, updated_at) FROM '/path/to/products_hardware.csv' WITH CSV HEADER;

-- 导入product_tags数据
\copy product_tags(id, product_id, tag_id, created_at) FROM '/path/to/product_tags.csv' WITH CSV HEADER;

-- 重置序列
SELECT setval('tag_categories_id_seq', (SELECT MAX(id) FROM tag_categories));
SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));
SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));
SELECT setval('products_hardware_id_seq', (SELECT MAX(id) FROM products_hardware));
SELECT setval('product_tags_id_seq', (SELECT MAX(id) FROM product_tags));
