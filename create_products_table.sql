-- 创建products表
CREATE TABLE IF NOT EXISTS products (
  -- 这里需要根据您导出的表结构信息填写列定义
  -- 例如：
  -- id SERIAL PRIMARY KEY,
  -- name VARCHAR(255) NOT NULL,
  -- description TEXT,
  -- 等等...
);

-- 注意：您需要根据从Supabase导出的实际列信息替换上面的注释部分
-- 下面是一个示例格式：
/*
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image_url VARCHAR(255),
  is_featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
*/
