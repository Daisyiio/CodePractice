// 获取画布元素
const cvs = document.getElementById('bg');

// 根据设备的像素比（devicePixelRatio）计算画布的宽度和高度
const width = window.innerWidth * devicePixelRatio;
const height = window.innerHeight * devicePixelRatio;

// 设置画布的宽度和高度
cvs.width = width;
cvs.height = height;

// 获取画布的 2D 渲染上下文
const ctx = cvs.getContext('2d');

// 设置字体大小，根据设备像素比调整
const fontSize = 20 * devicePixelRatio;

// 每列的宽度等于字体大小
const columnWidth = fontSize;

// 计算画布中可以容纳多少列
const columnCount = Math.floor(width / columnWidth);

// 创建一个数组，用于记录每一列下一个字符的绘制位置（初始值为 0）
const nextChar = new Array(columnCount).fill(0);

// 绘制函数
function draw() {
  // 设置画布背景颜色为半透明的黑色（用于实现字符逐渐消失的效果）
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0, 0, width, height);

  // 遍历每一列
  for (let i = 0; i < columnCount; i++) {
    // 获取一个随机字符
    const char = getRandomChar();
    // 获取一个随机颜色
    const color = getRandomColor();
    // 设置字体颜色
    ctx.fillStyle = color;
    // 设置字体大小和字体族
    ctx.font = `${fontSize}px "Roboto Mono"`;

    // 计算当前字符的 x 坐标（列的位置）
    const x = i * columnWidth;
    // 获取当前列的字符绘制位置
    const index = nextChar[i];
    // 计算当前字符的 y 坐标（基于字符的位置）
    const y = (index + 1) * fontSize;

    // 在画布上绘制字符
    ctx.fillText(char, x, y);

    // 如果字符超出画布高度，并且随机数大于 0.99，重置该列的字符位置
    if (y > height && Math.random() > 0.99) {
      nextChar[i] = 0;
    } else {
      // 否则，将该列的字符位置向下移动一行
      nextChar[i]++;
    }
  }
}

// 获取随机颜色的函数
function getRandomColor() {
  // 生成 10 种随机颜色
  const fontColors = generateRandomColors(10);
  // 从随机颜色数组中随机选择一个颜色
  return fontColors[Math.floor(Math.random() * fontColors.length)];
}

// 获取随机字符的函数
function getRandomChar() {
  // 定义字符集
  const str = 'console.log(hello world)';
  // 从字符集中随机选择一个字符
  return str[Math.floor(Math.random() * str.length)];
}

// 生成随机十六进制颜色的函数
function generateRandomColor() {
  // 生成一个随机的 RGB 颜色值（0 到 16777215 之间的整数）
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16) // 转换为十六进制字符串
      .padStart(6, '0') // 确保字符串长度为 6，不足时补 0
  );
}

// 生成指定数量的随机颜色数组的函数
function generateRandomColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    // 调用 generateRandomColor 生成随机颜色并添加到数组中
    colors.push(generateRandomColor());
  }
  return colors;
}

// 初始化绘制
draw();

// 每 20 毫秒调用一次 draw 函数，实现动画效果
setInterval(draw, 20);