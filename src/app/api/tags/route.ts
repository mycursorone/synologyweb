import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { TagCategory, Tag } from '@/types/product';

/**
 * 获取标签分类和标签
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryType = searchParams.get('type'); // 可以是 '常用筛选' 或 '高级筛选'

    // 构建查询条件
    let whereClause = '';
    const queryParams: any[] = [];
    
    if (categoryType) {
      whereClause = 'WHERE categories_type = $1';
      queryParams.push(categoryType);
    }

    // 查询标签分类
    const categoriesQuery = await pool.query(
      `SELECT * FROM tag_categories ${whereClause} ORDER BY sort`,
      queryParams
    );

    // 如果没有分类，直接返回空数组
    if (categoriesQuery.rows.length === 0) {
      return NextResponse.json({ categories: [] });
    }

    // 获取所有分类的ID
    const categoryIds = categoriesQuery.rows.map(category => category.id);

    // 查询所有标签
    const tagsQuery = await pool.query(
      `SELECT * FROM tags WHERE created_id = ANY($1) ORDER BY sort_order`,
      [categoryIds]
    );

    // 将标签数据组织成以分类ID为键的对象
    const categoryTags: Record<string, Tag[]> = {};
    tagsQuery.rows.forEach(tag => {
      if (!categoryTags[tag.created_id]) {
        categoryTags[tag.created_id] = [];
      }
      categoryTags[tag.created_id].push(tag);
    });

    // 将标签数据添加到分类中
    const categoriesWithTags = categoriesQuery.rows.map(category => ({
      ...category,
      tags: categoryTags[category.id] || []
    }));

    return NextResponse.json({ categories: categoriesWithTags });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { error: '获取标签数据时发生错误' },
      { status: 500 }
    );
  }
}
