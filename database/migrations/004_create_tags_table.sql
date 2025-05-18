-- Migration: Create tags table
-- Description: Creates the tags table based on Supabase structure
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_id UUID NOT NULL DEFAULT gen_random_uuid(),
  product_spec TEXT,
  product_size TEXT,
  sort_type SMALLINT,
  sort_order SMALLINT,
  spec_size TEXT,
  FOREIGN KEY (created_id) REFERENCES tag_categories(id)
);

-- Add comments
COMMENT ON TABLE tags IS '标签表';
COMMENT ON COLUMN tags.id IS '标签唯一标识符';
COMMENT ON COLUMN tags.created_id IS '关联的标签分类ID';
COMMENT ON COLUMN tags.product_spec IS '产品规格';
COMMENT ON COLUMN tags.product_size IS '产品尺寸';
COMMENT ON COLUMN tags.sort_type IS '排序类型';
COMMENT ON COLUMN tags.sort_order IS '排序顺序';
COMMENT ON COLUMN tags.spec_size IS '规格尺寸';
