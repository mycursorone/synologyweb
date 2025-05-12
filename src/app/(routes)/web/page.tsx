import HeroCarousel from '@/components/carousel/HeroCarousel';
import HoverFeatureCards from '@/components/ui/HoverFeatureCards';
import FeaturedProducts from '@/components/ui/FeaturedProducts';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* 英雄轮播 */}
      <HeroCarousel />

      {/* 特色卡片 */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <HoverFeatureCards />
        </div>
      </section>

      {/* 特色产品 */}
      <FeaturedProducts />

      {/* 关于我们 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="rounded-lg h-96 w-full overflow-hidden relative">
                <Image
                  src="/images/company.jpg"
                  alt="群晖科技总部"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">关于群晖科技</h2>
              <p className="text-gray-600 mb-6">
                群晖科技成立于2000年，是全球领先的网络附加存储、IP监控解决方案和网络设备提供商。我们致力于为家庭和企业用户提供可靠、安全、易用的数据管理和存储解决方案。
              </p>
              <p className="text-gray-600 mb-6">
                凭借创新的技术和卓越的产品质量，群晖科技已经赢得了全球数百万用户的信任。我们的产品线涵盖了NAS存储设备、监控系统、路由器和云服务等多个领域。
              </p>
              <Link
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">客户评价</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              听听我们的客户怎么说，他们的真实体验和反馈是我们不断进步的动力。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 评价 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="rounded-full h-12 w-12 overflow-hidden mr-4 bg-blue-600 flex items-center justify-center text-white font-bold">
                  <span>张</span>
                </div>
                <div>
                  <h4 className="font-bold">张先生</h4>
                  <p className="text-gray-500 text-sm">企业 IT 经理</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;群晖的 NAS 设备为我们公司提供了可靠的数据存储和备份解决方案。系统稳定，管理界面直观易用，大大提高了我们的工作效率。&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* 评价 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="rounded-full h-12 w-12 overflow-hidden mr-4 bg-green-600 flex items-center justify-center text-white font-bold">
                  <span>李</span>
                </div>
                <div>
                  <h4 className="font-bold">李女士</h4>
                  <p className="text-gray-500 text-sm">摄影师</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;作为一名专业摄影师，我需要大容量、高速度的存储设备。群晖的 DS1621+ 完美满足了我的需求，照片管理功能非常强大，我非常满意！&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* 评价 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="rounded-full h-12 w-12 overflow-hidden mr-4 bg-purple-600 flex items-center justify-center text-white font-bold">
                  <span>王</span>
                </div>
                <div>
                  <h4 className="font-bold">王先生</h4>
                  <p className="text-gray-500 text-sm">家庭用户</p>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;群晖的 DS220+ 是我家庭媒体中心的核心。它不仅存储了我们所有的照片和视频，还能作为媒体服务器，让我们在任何设备上观看电影和电视剧。&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="max-w-2xl mx-auto mb-8">
            无论您是家庭用户还是企业客户，我们都有适合您的解决方案。立即联系我们，了解更多信息。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              联系我们
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              浏览产品
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
