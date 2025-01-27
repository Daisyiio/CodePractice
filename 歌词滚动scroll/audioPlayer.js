const audio = document.getElementById('audio')
const playPauseBtn = document.getElementById('play-pause-btn')
const progress = document.getElementById('progress')
const currentTimeDisplay = document.getElementById('current-time')
const totalTimeDisplay = document.getElementById('total-time')
const muteBtn = document.getElementById('mute-btn')
const volumeControl = document.getElementById('volume')
const MusicName = document.querySelector('.music-name')
const audioSrc =  audio.src
const decodedSrc = decodeURIComponent(audioSrc);
MusicName.innerHTML = decodedSrc.split('/').pop().split('.').shift(); 
function PlayerStart() {}

// 播放/暂停
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
  } else {
    audio.pause()
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
  }
})

// 静音/取消静音
muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted
  muteBtn.innerHTML = audio.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>'
})

// 更新进度条 
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100
  progress.value = percent
  currentTimeDisplay.textContent = formatTime(audio.currentTime)
})

// 拖动进度条
progress.addEventListener('input', () => {
  window.requestAnimationFrame(() => {
    // 平滑更新滑块样式或值
    const time = (progress.value / 100) * audio.duration
    audio.currentTime = time
  });
})

// 更新总时长
audio.addEventListener('loadedmetadata', () => {
  console.log(formatTime(audio.duration),'更新总时长')
  getMetaData()
  // totalTimeDisplay.textContent = formatTime(audio.duration)
})
function getMetaData(){
  totalTimeDisplay.textContent = formatTime(audio.duration)
}
getMetaData()

// 音量控制
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value
})

// 格式化时间
function formatTime(time) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
}
