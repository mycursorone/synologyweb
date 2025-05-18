# 数据库目录

本目录包含与数据库相关的所有文件，包括迁移脚本、种子数据和备份文件。

## 目录结构

- `migrations/`: 数据库迁移文件，用于创建和修改数据库结构
- `seeds/`: 数据库种子文件，用于导入初始数据
- `backups/`: 数据库备份文件

## 使用方法

### 设置数据库

运行以下命令来设置数据库（创建表结构并导入数据）：

```bash
./setup_database.sh
```

### 手动执行迁移

```bash
sudo -u postgres psql -d synologywebdb -f migrations/001_create_products_table.sql
sudo -u postgres psql -d synologywebdb -f migrations/002_create_products_hardware_table.sql
sudo -u postgres psql -d synologywebdb -f migrations/003_create_tag_categories_table.sql
sudo -u postgres psql -d synologywebdb -f migrations/004_create_tags_table.sql
sudo -u postgres psql -d synologywebdb -f migrations/005_create_product_tags_table.sql
```

### 手动导入数据

```bash
sudo -u postgres psql -d synologywebdb -f seeds/001_import_products_data.sql
sudo -u postgres psql -d synologywebdb -f seeds/002_import_products_hardware_data.sql
sudo -u postgres psql -d synologywebdb -f seeds/003_import_tag_categories_data.sql
sudo -u postgres psql -d synologywebdb -f seeds/004_import_tags_data.sql
sudo -u postgres psql -d synologywebdb -f seeds/005_import_product_tags_data.sql
```

## 表结构

### products表

| 列名 | 数据类型 | 可空 | 默认值 | 描述 |
|------|----------|------|--------|------|
| id | UUID | 否 | gen_random_uuid() | 产品唯一标识符 |
| name | TEXT | 否 | '' | 产品名称 |
| description | TEXT | 是 | null | 产品描述 |
| cover_image | TEXT | 是 | null | 产品封面图片URL |
| spec_pdf_url | TEXT | 是 | null | 产品规格PDF文件URL |
| is_active | BOOLEAN | 否 | true | 产品是否激活 |
| description_i18N | JSONB | 是 | null | 产品多语言描述(JSON格式) |
| software_space | JSONB | 是 | null | 软件规格(JSON格式) |
| hardware_space | JSONB | 是 | null | 硬件规格(JSON格式) |
| created_at | TIME | 是 | now() | 创建时间 |
| updated_at | TIMESTAMP | 是 | now() | 更新时间 |

### products_hardware表

| 列名 | 数据类型 | 可空 | 默认值 | 描述 |
|------|----------|------|--------|------|
| id | UUID | 否 | gen_random_uuid() | 硬件规格唯一标识符 |
| products_id | UUID | 否 | gen_random_uuid() | 关联的产品ID |
| controller_count | SMALLINT | 是 | null | 控制器数量 |
| cpu_model | VARCHAR | 是 | null | CPU型号 |
| cpu_count | SMALLINT | 是 | null | CPU数量 |
| cpu_cores | SMALLINT | 是 | null | CPU核心数 |
| ... | ... | ... | ... | ... |

### tag_categories表

| 列名 | 数据类型 | 可空 | 默认值 | 描述 |
|------|----------|------|--------|------|
| id | UUID | 否 | gen_random_uuid() | 分类唯一标识符 |
| name | TEXT | 否 | null | 分类名称 |
| sort | SMALLINT | 是 | null | 排序顺序 |
| categories_type | TEXT | 是 | null | 分类类型 |

### tags表

| 列名 | 数据类型 | 可空 | 默认值 | 描述 |
|------|----------|------|--------|------|
| id | UUID | 否 | gen_random_uuid() | 标签唯一标识符 |
| created_id | UUID | 否 | gen_random_uuid() | 关联的标签分类ID |
| product_spec | TEXT | 是 | null | 产品规格 |
| product_size | TEXT | 是 | null | 产品尺寸 |
| sort_type | SMALLINT | 是 | null | 排序类型 |
| sort_order | SMALLINT | 是 | null | 排序顺序 |
| spec_size | TEXT | 是 | null | 规格尺寸 |

### product_tags表

| 列名 | 数据类型 | 可空 | 默认值 | 描述 |
|------|----------|------|--------|------|
| product_id | UUID | 否 | gen_random_uuid() | 产品ID |
| tag_id | UUID | 否 | gen_random_uuid() | 标签ID |
| product_name | TEXT | 是 | 'null'::text | 产品名称 |
| tag_spec | TEXT | 是 | 'null'::text | 标签规格 |
| tag_size | TEXT | 是 | 'null'::text | 标签尺寸 |

## 数据来源

数据从Supabase导出，原始备份文件存储在`backups/`目录中。
