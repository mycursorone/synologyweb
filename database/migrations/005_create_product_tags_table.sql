-- Migration: Create product_tags table
-- Description: Creates the product_tags table based on Supabase structure
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create product_tags table
CREATE TABLE IF NOT EXISTS product_tags (
  product_id UUID NOT NULL DEFAULT gen_random_uuid(),
  tag_id UUID NOT NULL DEFAULT gen_random_uuid(),
  product_name TEXT DEFAULT 'null'::text,
  tag_spec TEXT DEFAULT 'null'::text,
  tag_size TEXT DEFAULT 'null'::text,
  PRIMARY KEY (product_id, tag_id),
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id)
);

-- Add comments
COMMENT ON TABLE product_tags IS '产品标签关联表';
COMMENT ON COLUMN product_tags.product_id IS '产品ID';
COMMENT ON COLUMN product_tags.tag_id IS '标签ID';
COMMENT ON COLUMN product_tags.product_name IS '产品名称';
COMMENT ON COLUMN product_tags.tag_spec IS '标签规格';
COMMENT ON COLUMN product_tags.tag_size IS '标签尺寸';
