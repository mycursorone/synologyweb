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
  // 禁用压缩，以便更容易调试
  compress: false,
  // 确保生成正确的静态资源路径
  basePath: '',
  // 确保图片优化正常工作
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
