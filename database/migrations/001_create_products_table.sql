-- Migration: Create products table
-- Description: Creates the products table based on Supabase structure
-- Created at: $(date +"%Y-%m-%d %H:%M:%S")

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL DEFAULT '',
  description TEXT,
  cover_image TEXT,
  spec_pdf_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  description_i18N JSONB,
  software_space JSONB,
  hardware_space JSONB,
  created_at TIME WITHOUT TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

-- Add comments
COMMENT ON TABLE products IS '产品表';
COMMENT ON COLUMN products.id IS '产品唯一标识符';
COMMENT ON COLUMN products.name IS '产品名称';
COMMENT ON COLUMN products.description IS '产品描述';
COMMENT ON COLUMN products.cover_image IS '产品封面图片URL';
COMMENT ON COLUMN products.spec_pdf_url IS '产品规格PDF文件URL';
COMMENT ON COLUMN products.is_active IS '产品是否激活';
COMMENT ON COLUMN products.description_i18N IS '产品多语言描述(JSON格式)';
COMMENT ON COLUMN products.software_space IS '软件规格(JSON格式)';
COMMENT ON COLUMN products.hardware_space IS '硬件规格(JSON格式)';
COMMENT ON COLUMN products.created_at IS '创建时间';
COMMENT ON COLUMN products.updated_at IS '更新时间';
