-- 导入products表数据
\copy products FROM '/path/to/products.csv' WITH CSV HEADER;

-- 重置序列（如果表有自增ID）
SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));
