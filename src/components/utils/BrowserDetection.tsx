'use client';

import { useEffect } from 'react';

export default function BrowserDetection() {
  useEffect(() => {
    // 检测浏览器类型
    const detectBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      let browserClass = '';

      if (userAgent.indexOf('edge') > -1 || userAgent.indexOf('edg') > -1) {
        browserClass = 'browser-edge';
      } else if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('safari') > -1) {
        browserClass = 'browser-chrome';
      } else if (userAgent.indexOf('firefox') > -1) {
        browserClass = 'browser-firefox';
      } else if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) {
        browserClass = 'browser-safari';
      } else if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1) {
        browserClass = 'browser-ie';
      } else if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
        browserClass = 'browser-opera';
      }

      // 添加浏览器类到 HTML 元素
      if (browserClass) {
        document.documentElement.classList.add(browserClass);
      }

      // 检测移动设备
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.documentElement.classList.add('mobile-device');
      } else {
        document.documentElement.classList.add('desktop-device');
      }
    };

    detectBrowser();
  }, []);

  return null;
}
