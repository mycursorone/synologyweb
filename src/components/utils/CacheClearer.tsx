'use client';

import { useEffect } from 'react';

export default function CacheClearer() {
  useEffect(() => {
    // 尝试清除浏览器缓存
    const clearCache = async () => {
      if ('caches' in window) {
        try {
          // 清除所有缓存
          const cacheNames = await window.caches.keys();
          await Promise.all(
            cacheNames.map(cacheName => {
              return window.caches.delete(cacheName);
            })
          );
          console.log('所有缓存已清除');
        } catch (err) {
          console.error('清除缓存时出错:', err);
        }
      }
    };

    clearCache();

    // 添加刷新事件监听器
    const handleBeforeUnload = () => {
      // 在页面刷新前清除缓存
      localStorage.setItem('cache_timestamp', Date.now().toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}
