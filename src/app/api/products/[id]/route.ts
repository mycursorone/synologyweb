import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

/**
 * 获取单个产品
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // 查询产品
    const productQuery = await pool.query(
      `SELECT * FROM products WHERE id = $1`,
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
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: '获取产品数据时发生错误' },
      { status: 500 }
    );
  }
}

/**
 * 更新产品
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const data = await request.json();
    
    // 验证必填字段
    if (!data.name) {
      return NextResponse.json(
        { error: '产品名称不能为空' },
        { status: 400 }
      );
    }
    
    // 开始数据库事务
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      // 更新产品基本信息
      const productResult = await client.query(
        `UPDATE products SET
          name = $1,
          description = $2,
          cover_image = $3,
          spec_pdf_url = $4,
          is_active = $5,
          updated_at = NOW()
        WHERE id = $6 RETURNING *`,
        [
          data.name,
          data.description || null,
          data.cover_image || null,
          data.spec_pdf_url || null,
          data.is_active !== false,
          id
        ]
      );
      
      if (productResult.rows.length === 0) {
        await client.query('ROLLBACK');
        return NextResponse.json({ error: '未找到产品' }, { status: 404 });
      }
      
      // 如果有标签，更新产品标签关联
      if (data.tags && Array.isArray(data.tags)) {
        // 删除现有的标签关联
        await client.query(
          `DELETE FROM product_tags WHERE product_id = $1`,
          [id]
        );
        
        if (data.tags.length > 0) {
          // 获取标签信息
          const tagsResult = await client.query(
            `SELECT t.*, tc.name as category_name 
             FROM tags t
             JOIN tag_categories tc ON t.created_id = tc.id
             WHERE t.id = ANY($1)`,
            [data.tags]
          );
          
          // 插入新的产品标签关联
          for (const tag of tagsResult.rows) {
            await client.query(
              `INSERT INTO product_tags (
                product_id, tag_id, product_name, tag_spec, tag_size
              ) VALUES ($1, $2, $3, $4, $5)`,
              [
                id,
                tag.id,
                data.name,
                tag.product_spec || null,
                tag.product_size || null
              ]
            );
          }
        }
      }
      
      await client.query('COMMIT');
      
      return NextResponse.json({
        id,
        message: '产品更新成功'
      });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: '更新产品时发生错误' },
      { status: 500 }
    );
  }
}

/**
 * 删除产品
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // 开始数据库事务
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      // 删除产品标签关联
      await client.query(
        `DELETE FROM product_tags WHERE product_id = $1`,
        [id]
      );
      
      // 删除产品硬件规格
      await client.query(
        `DELETE FROM products_hardware WHERE products_id = $1`,
        [id]
      );
      
      // 删除产品
      const result = await client.query(
        `DELETE FROM products WHERE id = $1 RETURNING id`,
        [id]
      );
      
      if (result.rows.length === 0) {
        await client.query('ROLLBACK');
        return NextResponse.json({ error: '未找到产品' }, { status: 404 });
      }
      
      await client.query('COMMIT');
      
      return NextResponse.json({
        message: '产品删除成功'
      });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: '删除产品时发生错误' },
      { status: 500 }
    );
  }
}
