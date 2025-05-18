-- Migration: Create tag_categories table
-- Description: Creates the tag_categories table based on Supabase structure
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tag_categories table
CREATE TABLE IF NOT EXISTS tag_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  sort SMALLINT,
  categories_type TEXT
);

-- Add comments
COMMENT ON TABLE tag_categories IS '标签分类表';
COMMENT ON COLUMN tag_categories.id IS '分类唯一标识符';
COMMENT ON COLUMN tag_categories.name IS '分类名称';
COMMENT ON COLUMN tag_categories.sort IS '排序顺序';
COMMENT ON COLUMN tag_categories.categories_type IS '分类类型';
