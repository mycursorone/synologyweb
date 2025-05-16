/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // 确保静态资源路径正确
  assetPrefix: '',
  // 不使用 standalone 输出，因为我们需要访问 .next/static 目录
  // output: 'standalone',
  // 启用压缩以提高性能
  compress: true,
  // 确保生成正确的静态资源路径
  basePath: '',
  // 确保图片优化正常工作
  images: {
    unoptimized: true,
  },
  // 添加跨浏览器兼容性支持
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // 确保所有资源使用绝对路径
  trailingSlash: false,
  // 添加缓存控制
  headers: async () => {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.css',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
