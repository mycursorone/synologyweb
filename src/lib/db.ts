import { Pool } from 'pg';

// 创建数据库连接池
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'synologywebdb',
  password: process.env.DB_PASSWORD || 'postgres',
  port: parseInt(process.env.DB_PORT || '5432'),
});

// 测试数据库连接
pool.on('connect', () => {
  console.log('Connected to the database:', process.env.DB_NAME || 'synologywebdb');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  // 不要在生产环境中退出进程
  if (process.env.NODE_ENV !== 'production') {
    process.exit(-1);
  }
});

// 测试连接
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Database connection test successful');
    client.release();
    return true;
  } catch (err) {
    console.error('Database connection test failed:', err);
    return false;
  }
};

// 在非生产环境中立即测试连接
if (process.env.NODE_ENV !== 'production') {
  testConnection();
}

export default pool;
