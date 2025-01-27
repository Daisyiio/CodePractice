// 获取音频元素和画布元素
const audioEle = document.querySelector('audio')
const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')
const MusicName = document.querySelector('.music-name')
const audioSrc =  audioEle.src
const decodedSrc = decodeURIComponent(audioSrc);
MusicName.innerHTML = decodedSrc.split('/').pop().split('.').shift(); 

// 初始化画布大小
function initCvs() {
  // 设置画布的宽度和高度，乘以devicePixelRatio来确保高DPI设备的显示效果
  cvs.width = window.innerWidth * devicePixelRatio
  cvs.height = (window.innerHeight / 2) * devicePixelRatio
  console.log(window.innerWidth, window.innerHeight) // 输出窗口的宽高，帮助调试
}

// 初始化画布
initCvs()

// 监听窗口大小变化，重新设置画布大小
window.addEventListener('resize', initCvs)

// 是否已经初始化音频上下文
let isInit = false
let dataArray, analyser

// 音频播放时触发的事件
audioEle.onplay = function () {
  if (isInit) {
    return // 如果已经初始化，直接返回
  }

  // 初始化音频上下文
  const audCtx = new AudioContext() // 创建音频上下文
  console.log(audCtx,'audCtx')
  const source = audCtx.createMediaElementSource(audioEle) // 创建音频源节点
  analyser = audCtx.createAnalyser() // 创建音频分析器节点
  analyser.fftSize = 1024 // 设定频率分析的大小，必须是2的n次幂
  dataArray = new Uint8Array(analyser.frequencyBinCount) // 创建数组用于存储频谱数据
  // 将音频源连接到分析器节点
  source.connect(analyser)

  // 将分析器节点连接到音频上下文的输出（扬声器等）
  analyser.connect(audCtx.destination)

  // 标记初始化完成
  isInit = true
}

// 绘制频谱的函数
function draw() {
  // 使用requestAnimationFrame来保持动画的平滑
  requestAnimationFrame(draw)

  // 获取画布的宽高
  const { width, height } = cvs

  // 清空画布，准备绘制新的频谱
  ctx.clearRect(0, 0, width, height)

  if (!isInit) {
    return // 如果音频上下文还没有初始化，则跳过绘制
  }

  // 获取音频频谱数据
  analyser.getByteFrequencyData(dataArray)

  // 控制频谱条的数量，缩小频谱数据长度
  const len = dataArray.length / 2.5

  // 计算每个条形图的宽度
  const barWidth = width / len / 2

  // 设置条形图的颜色，使用渐变色
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, '#78C5F7');
  gradient.addColorStop(1, '#FF9A8B');
  
  ctx.fillStyle = gradient

  // 绘制频谱条形图
  for (let i = 0; i < dataArray.length; i++) {
    const data = dataArray[i] // 获取每个频段的音量数据，范围是0到255
    const barHeight = (data / 256) * height // 计算每个条形图的高度，比例关系

    // 计算每个条形图的X坐标，左右对称
    const x = i * barWidth + width / 2
    const x2 = width / 2 - (i + 1) * barWidth

    // 计算条形图的Y坐标，确保从底部绘制
    const y = height - barHeight

    // 绘制条形图的左半部分
    ctx.fillRect(x, y, barWidth - 2, barHeight)

    // 绘制条形图的右半部分
    ctx.fillRect(x2, y, barWidth - 2, barHeight)
  }
}

// 启动绘制函数
draw()
