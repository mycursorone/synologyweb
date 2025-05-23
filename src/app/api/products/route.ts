import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Product, ProductFilterParams } from '@/types/product';
import { v4 as uuidv4 } from 'uuid';

/**
 * 获取产品列表或单个产品
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const searchTerm = searchParams.get('search') || '';
    const categoryId = searchParams.get('category_id');
    const tagId = searchParams.get('tag_id');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // 如果提供了 id 参数，返回单个产品
    if (id) {
      const productQuery = await pool.query(
        `SELECT * FROM products WHERE id = $1 AND is_active = true`,
        [id]
      );

      if (productQuery.rows.length === 0) {
        return NextResponse.json({ error: '未找到产品' }, { status: 404 });
      }

      const product = productQuery.rows[0];

      // 获取产品的硬件规格
      const hardwareQuery = await pool.query(
        `SELECT * FROM products_hardware WHERE products_id = $1`,
        [id]
      );

      // 获取产品的标签
      const tagsQuery = await pool.query(
        `SELECT t.*, tc.name as category_name, tc.categories_type
         FROM tags t
         JOIN product_tags pt ON t.id = pt.tag_id
         JOIN tag_categories tc ON t.created_id = tc.id
         WHERE pt.product_id = $1
         ORDER BY tc.sort, t.sort_order`,
        [id]
      );

      return NextResponse.json({
        ...product,
        hardware: hardwareQuery.rows[0] || null,
        tags: tagsQuery.rows || []
      });
    }

    // 构建查询条件
    let queryParams: any[] = [limit, offset];
    let whereClause = 'WHERE is_active = true';
    let paramIndex = 3;
    let countQueryParams: any[] = [];

    // 搜索条件
    if (searchTerm) {
      whereClause += ` AND (name ILIKE $${paramIndex} OR description ILIKE $${paramIndex})`;
      queryParams.push(`%${searchTerm}%`);
      countQueryParams.push(`%${searchTerm}%`);
      paramIndex++;
    }

    // 分类筛选
    if (categoryId) {
      whereClause += ` AND id IN (
        SELECT product_id FROM product_tags pt
        JOIN tags t ON pt.tag_id = t.id
        WHERE t.created_id = $${paramIndex - 2}
      )`;
      queryParams.push(categoryId);
      countQueryParams.push(categoryId);
      paramIndex++;
    }

    // 标签筛选
    if (tagId) {
      whereClause += ` AND id IN (
        SELECT product_id FROM product_tags WHERE tag_id = $${paramIndex}
      )`;
      queryParams.push(tagId);
      countQueryParams.push(tagId);
      paramIndex++;
    }

    // 查询产品总数
    const countQuery = await pool.query(
      `SELECT COUNT(*) FROM products ${whereClause.replace(/\$(\d+)/g, (_, num) => `$${Number(num) - 2}`)}`,
      countQueryParams
    );
    const totalCount = parseInt(countQuery.rows[0].count);

    // 查询产品列表
    const productsQuery = await pool.query(
      `SELECT * FROM products ${whereClause} ORDER BY name LIMIT $1 OFFSET $2`,
      queryParams
    );

    // 获取所有产品的ID
    const productIds = productsQuery.rows.map(product => product.id);

    // 如果没有产品，直接返回空数组
    if (productIds.length === 0) {
      return NextResponse.json({
        products: [],
        pagination: {
          total: 0,
          page,
          limit,
          totalPages: 0
        }
      });
    }

    // 获取所有产品的标签（一次性查询，减少数据库请求）
    const tagsQuery = await pool.query(
      `SELECT pt.product_id, t.*, tc.name as category_name, tc.categories_type
       FROM tags t
       JOIN product_tags pt ON t.id = pt.tag_id
       JOIN tag_categories tc ON t.created_id = tc.id
       WHERE pt.product_id = ANY($1)
       ORDER BY tc.sort, t.sort_order`,
      [productIds]
    );

    // 将标签数据组织成以产品ID为键的对象
    const productTags: Record<string, any[]> = {};
    tagsQuery.rows.forEach(tag => {
      if (!productTags[tag.product_id]) {
        productTags[tag.product_id] = [];
      }
      productTags[tag.product_id].push(tag);
    });

    // 将标签数据添加到产品中
    const productsWithTags = productsQuery.rows.map(product => ({
      ...product,
      tags: productTags[product.id] || []
    }));

    return NextResponse.json({
      products: productsWithTags,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: '获取产品数据时发生错误' },
      { status: 500 }
    );
  }
}

/**
 * 创建新产品
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // 验证必填字段
    if (!data.name) {
      return NextResponse.json(
        { error: '产品名称不能为空' },
        { status: 400 }
      );
    }

    // 生成UUID
    const productId = uuidv4();

    // 开始数据库事务
    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      // 插入产品基本信息
      const productResult = await client.query(
        `INSERT INTO products (
          id, name, description, cover_image, spec_pdf_url, is_active
        ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          productId,
          data.name,
          data.description || null,
          data.cover_image || null,
          data.spec_pdf_url || null,
          data.is_active !== false
        ]
      );

      // 如果有标签，插入产品标签关联
      if (data.tags && Array.isArray(data.tags) && data.tags.length > 0) {
        // 获取标签信息
        const tagsResult = await client.query(
          `SELECT t.*, tc.name as category_name
           FROM tags t
           JOIN tag_categories tc ON t.created_id = tc.id
           WHERE t.id = ANY($1)`,
          [data.tags]
        );

        // 插入产品标签关联
        for (const tag of tagsResult.rows) {
          await client.query(
            `INSERT INTO product_tags (
              product_id, tag_id, product_name, tag_spec, tag_size
            ) VALUES ($1, $2, $3, $4, $5)`,
            [
              productId,
              tag.id,
              data.name,
              tag.product_spec || null,
              tag.product_size || null
            ]
          );
        }
      }

      await client.query('COMMIT');

      return NextResponse.json({
        id: productId,
        message: '产品创建成功'
      });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: '创建产品时发生错误' },
      { status: 500 }
    );
  }
}
