import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // 测试数据库连接
    const result = await pool.query('SELECT NOW()');
    
    return NextResponse.json({
      status: 'success',
      message: '数据库连接正常',
      timestamp: result.rows[0].now
    });
  } catch (error) {
    console.error('数据库连接测试失败:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: '数据库连接失败',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
