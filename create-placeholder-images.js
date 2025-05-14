const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// 产品图片
const productImages = [
  { name: 'ds220j.jpg', text: 'DS220j' },
  { name: 'ds220plus.jpg', text: 'DS220+' },
  { name: 'ds420j.jpg', text: 'DS420j' },
  { name: 'ds1621plus.jpg', text: 'DS1621+' },
  { name: 'ds1821plus.jpg', text: 'DS1821+' },
  { name: 'rs1221plus.jpg', text: 'RS1221+' },
  { name: 'license.jpg', text: '摄像头授权' },
  { name: 'vs960hd.jpg', text: 'VS960HD' },
  { name: 'bc500.jpg', text: 'BC500' },
  { name: 'ic500.jpg', text: 'IC500' },
  { name: 'rt2600ac.jpg', text: 'RT2600ac' },
  { name: 'mr2200ac.jpg', text: 'MR2200ac' },
];

// 解决方案图片
const solutionImages = [
  { name: 'enterprise-storage.jpg', text: '企业数据存储与备份' },
  { name: 'small-business-it.jpg', text: '小型企业IT基础设施' },
  { name: 'video-surveillance.jpg', text: '视频监控与安全' },
  { name: 'education-data.jpg', text: '教育机构数据管理' },
  { name: 'healthcare-data.jpg', text: '医疗数据存储与保护' },
  { name: 'home-multimedia.jpg', text: '家庭多媒体中心' },
];

// 支持图片
const supportImages = [
  { name: 'dsm.jpg', text: 'DSM 操作系统' },
  { name: 'utilities.jpg', text: '实用工具' },
  { name: 'nas-firmware.jpg', text: 'NAS 固件' },
  { name: 'router-firmware.jpg', text: '路由器固件' },
  { name: 'nas-faq.jpg', text: 'NAS 常见问题' },
  { name: 'surveillance-faq.jpg', text: '监控常见问题' },
];

// 创建占位图片
function createPlaceholderImage(outputPath, text, bgColor = '#3B82F6', textColor = '#FFFFFF') {
  const width = 400;
  const height = 300;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 绘制背景
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // 绘制文本
  ctx.fillStyle = textColor;
  ctx.font = 'bold 30px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // 保存图片
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Created: ${outputPath}`);
}

// 确保目录存在
const dirs = ['public/images/products', 'public/images/solutions', 'public/images/support'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 创建产品图片
productImages.forEach(img => {
  createPlaceholderImage(path.join('public/images/products', img.name), img.text);
});

// 创建解决方案图片
solutionImages.forEach(img => {
  createPlaceholderImage(path.join('public/images/solutions', img.name), img.text, '#2563EB');
});

// 创建支持图片
supportImages.forEach(img => {
  createPlaceholderImage(path.join('public/images/support', img.name), img.text, '#1E40AF');
});

console.log('All placeholder images created successfully!');
