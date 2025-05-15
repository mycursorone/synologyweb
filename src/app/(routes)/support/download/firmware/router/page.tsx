import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '路由器固件下载 - 美步科技',
  description: '下载最新的美步路由器固件，确保您的网络设备安全稳定运行',
};

// 路由器型号数据
const routerModels = [
  {
    id: 'rt2600ac',
    name: 'RT2600ac',
    image: '/images/products/rt2600ac.jpg',
    firmware: [
      {
        version: '1.3.1-8273',
        date: '2023-05-20',
        size: '12.5 MB',
        notes: '修复了安全漏洞，提高了WiFi稳定性和性能',
        link: '/downloads/firmware/router/rt2600ac_1.3.1-8273.bin'
      },
      {
        version: '1.3.0-8252',
        date: '2023-02-15',
        size: '12.3 MB',
        notes: '增加了新的安全功能，优化了网络流量管理',
        link: '/downloads/firmware/router/rt2600ac_1.3.0-8252.bin'
      },
      {
        version: '1.2.5-8227',
        date: '2022-11-10',
        size: '12.1 MB',
        notes: '改进了VPN性能，修复了DHCP服务器问题',
        link: '/downloads/firmware/router/rt2600ac_1.2.5-8227.bin'
      }
    ]
  },
  {
    id: 'mr2200ac',
    name: 'MR2200ac',
    image: '/images/products/mr2200ac.jpg',
    firmware: [
      {
        version: '1.3.1-8273',
        date: '2023-05-20',
        size: '10.8 MB',
        notes: '修复了安全漏洞，提高了WiFi稳定性和性能',
        link: '/downloads/firmware/router/mr2200ac_1.3.1-8273.bin'
      },
      {
        version: '1.3.0-8252',
        date: '2023-02-15',
        size: '10.6 MB',
        notes: '增加了新的安全功能，优化了网络流量管理',
        link: '/downloads/firmware/router/mr2200ac_1.3.0-8252.bin'
      },
      {
        version: '1.2.5-8227',
        date: '2022-11-10',
        size: '10.4 MB',
        notes: '改进了Mesh网络性能，修复了DHCP服务器问题',
        link: '/downloads/firmware/router/mr2200ac_1.2.5-8227.bin'
      }
    ]
  }
];

export default function RouterFirmwarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">路由器固件下载</h1>
        <p className="text-xl text-gray-600">
          下载最新的美步路由器固件，确保您的网络设备安全稳定运行
        </p>
      </div>

      {/* 固件说明 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">关于固件更新</h2>
        <p className="text-gray-600 mb-4">
          固件是控制路由器硬件功能的软件。定期更新固件可以修复已知问题、提高网络稳定性和性能，以及增强设备安全性。
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>注意：</strong> 更新固件前，请确保您的路由器已备份配置，并且在更新过程中不会断电。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 型号选择器 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">选择您的路由器型号</h2>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">-- 选择路由器型号 --</option>
            {routerModels.map((model) => (
              <option key={model.id} value={model.id}>{model.name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 路由器固件列表 */}
      <div className="space-y-10">
        {routerModels.map((model) => (
          <div key={model.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/4">
                  <div className="bg-gray-200 rounded-lg w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">{model.name} 图片</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold mb-2">{model.name}</h2>
                  <p className="text-gray-600 mb-4">
                    {model.id === 'rt2600ac'
                      ? '高性能双频无线路由器，提供强大的网络安全功能和先进的流量控制。'
                      : '高性能Mesh WiFi路由器，可以与其他MR2200ac或RT2600ac组成Mesh网络，覆盖更大区域。'}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {model.id === 'rt2600ac' ? '双频AC2600' : '三频AC2200'}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {model.id === 'rt2600ac' ? '4x4 MIMO' : '2x2 MIMO'}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {model.id === 'rt2600ac' ? 'SRM操作系统' : 'Mesh网络'}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">可用固件</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">版本</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">发布日期</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件大小</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">更新说明</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {model.firmware.map((fw, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fw.version}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fw.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fw.size}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{fw.notes}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href={fw.link} className="text-blue-600 hover:text-blue-900">下载</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 更新指南 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">固件更新指南</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">方法一：通过SRM更新</h3>
            <ol className="list-decimal pl-5 text-gray-600 space-y-2">
              <li>登录SRM控制面板</li>
              <li>前往"控制面板" {`>`} "更新与还原" {`>`} "更新"</li>
              <li>点击"手动更新"</li>
              <li>上传下载的固件文件</li>
              <li>按照屏幕上的指示完成更新</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">方法二：通过恢复模式更新</h3>
            <ol className="list-decimal pl-5 text-gray-600 space-y-2">
              <li>下载固件文件到您的计算机</li>
              <li>关闭路由器电源</li>
              <li>按住RESET按钮，同时打开电源</li>
              <li>当电源指示灯开始闪烁时，释放RESET按钮</li>
              <li>将计算机连接到路由器的LAN端口</li>
              <li>在浏览器中访问http://router.synology.com</li>
              <li>上传固件文件并按照指示完成更新</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>重要提示：</strong> 固件更新过程中，请勿关闭路由器电源或断开网络连接。更新完成后，设备将自动重启。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/support/knowledge/faq"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            查看详细的固件更新指南
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
