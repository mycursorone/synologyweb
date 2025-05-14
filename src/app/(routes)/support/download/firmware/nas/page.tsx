import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAS 固件下载 - 美步科技',
  description: '下载最新的美步 NAS 设备固件，确保您的设备安全稳定运行',
};

// NAS系列数据
const nasSeries = [
  {
    id: 'ds-plus',
    name: 'DS Plus 系列',
    models: [
      {
        id: 'ds220plus',
        name: 'DS220+',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '8.5 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/ds220plus_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '8.5 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/ds220plus_42661.bin'
          }
        ]
      },
      {
        id: 'ds920plus',
        name: 'DS920+',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '9.2 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/ds920plus_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '9.2 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/ds920plus_42661.bin'
          }
        ]
      },
      {
        id: 'ds1621plus',
        name: 'DS1621+',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '10.1 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/ds1621plus_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '10.1 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/ds1621plus_42661.bin'
          }
        ]
      }
    ]
  },
  {
    id: 'ds-j',
    name: 'DS J 系列',
    models: [
      {
        id: 'ds220j',
        name: 'DS220j',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '7.8 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/ds220j_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '7.8 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/ds220j_42661.bin'
          }
        ]
      },
      {
        id: 'ds420j',
        name: 'DS420j',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '8.2 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/ds420j_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '8.2 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/ds420j_42661.bin'
          }
        ]
      }
    ]
  },
  {
    id: 'rs-plus',
    name: 'RS Plus 系列',
    models: [
      {
        id: 'rs1221plus',
        name: 'RS1221+',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '10.5 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/rs1221plus_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '10.5 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/rs1221plus_42661.bin'
          }
        ]
      },
      {
        id: 'rs1619plus',
        name: 'RS1619+',
        firmware: [
          {
            version: '42661-1',
            date: '2023-06-10',
            size: '10.3 MB',
            notes: '修复了系统启动问题和网络连接稳定性',
            link: '/downloads/firmware/nas/rs1619plus_42661-1.bin'
          },
          {
            version: '42661',
            date: '2023-05-15',
            size: '10.3 MB',
            notes: '改进了系统性能和硬件兼容性',
            link: '/downloads/firmware/nas/rs1619plus_42661.bin'
          }
        ]
      }
    ]
  }
];

export default function NasFirmwarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">NAS 固件下载</h1>
        <p className="text-xl text-gray-600">
          下载最新的美步 NAS 设备固件，确保您的设备安全稳定运行
        </p>
      </div>

      {/* 固件说明 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">关于固件更新</h2>
        <p className="text-gray-600 mb-4">
          固件是控制NAS硬件功能的软件。定期更新固件可以修复已知问题、提高系统稳定性和性能，以及增强设备安全性。
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
                <strong>注意：</strong> 更新固件前，请确保您的NAS设备已备份重要数据，并且在更新过程中不会断电。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 型号选择器 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">选择您的NAS型号</h2>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">-- 选择NAS型号 --</option>
            {nasSeries.map((series) => (
              <optgroup key={series.id} label={series.name}>
                {series.models.map((model) => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 固件列表 */}
      <div className="space-y-10">
        {nasSeries.map((series) => (
          <div key={series.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">{series.name}</h2>
            </div>
            <div className="p-6">
              {series.models.map((model) => (
                <div key={model.id} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">{model.name}</h3>
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
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 更新指南 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">固件更新指南</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">方法一：通过DSM更新</h3>
            <ol className="list-decimal pl-5 text-gray-600 space-y-2">
              <li>登录DSM控制面板</li>
              <li>前往"控制面板" > "更新与还原" > "更新"</li>
              <li>点击"手动更新"</li>
              <li>上传下载的固件文件</li>
              <li>按照屏幕上的指示完成更新</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">方法二：通过Assistant更新</h3>
            <ol className="list-decimal pl-5 text-gray-600 space-y-2">
              <li>在计算机上安装并运行Assistant</li>
              <li>在设备列表中找到您的NAS</li>
              <li>右键点击设备，选择"更新固件"</li>
              <li>选择下载的固件文件</li>
              <li>按照向导完成更新</li>
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
                  <strong>重要提示：</strong> 固件更新过程中，请勿关闭NAS电源或断开网络连接。更新完成后，设备将自动重启。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Link 
            href="/support/knowledge/faq/nas" 
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
