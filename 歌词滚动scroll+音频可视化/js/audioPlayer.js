const audio = document.getElementById('audio')
const playPauseBtn = document.getElementById('play-pause-btn')
const progress = document.getElementById('progress')
const currentTimeDisplay = document.getElementById('current-time')
const totalTimeDisplay = document.getElementById('total-time')
const muteBtn = document.getElementById('mute-btn')
const volumeControl = document.getElementById('volume')
const MusicName = document.querySelector('.music-name')
const audioSrc = audio.src
const decodedSrc = decodeURIComponent(audioSrc)
MusicName.innerHTML = decodedSrc.split('/').pop().split('.').shift()
function PlayerStart() {}
// 播放/暂停
playPauseBtn.addEventListener('click', () => {
  AudioPlayAndPause()
})
function AudioPlayAndPause() {
  if (audio.paused) {
    audio.play()
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
  } else {
    audio.pause()
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
  }
}
// 暴露播放控制函数
window.toggleAudioPlayPause = function () {
  AudioPlayAndPause()
}

// 静音/取消静音
muteBtn.addEventListener('click', () => {
  setAudioMuted(!audio.muted)
})

function setAudioMuted(muted) {
  if (muted) {
    audio.muted = true
    volumeControl.value = 0
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'
  } else {
    audio.muted = false
    volumeControl.value = audio.volume
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
  }
}

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
  })
})

//暴露到全局 给keyboard.js 调用
window.setDurationUpAndDown = function (type, seconds = 1) {
  switch (type) {
    case 'right':
      if (audio.currentTime + 1 <= audio.duration) {
        audio.currentTime = audio.currentTime + seconds
        progress.value = audio.currentTime / audio.duration // 更新进度条
      }
      break
    case 'left':
      if (audio.currentTime - 1 >= 0) {
        audio.currentTime = audio.currentTime - seconds
        progress.value = audio.currentTime / audio.duration // 更新进度条
      }
      break
  }
}

// 更新总时长
audio.addEventListener('loadedmetadata', () => {
  getMetaData()
})
function getMetaData() {
  totalTimeDisplay.textContent = formatTime(audio.duration)
}
getMetaData()

// 音量控制
volumeControl.addEventListener('input', () => {
  audio.volume = parseFloat(volumeControl.value)
  setAudioMuted(false)
})

//暴露到全局 给keyboard.js 调用
window.volumeUpAndDown = function (type, volume = 10) {
  let addnumber = volume / 100
  let currentVolume = parseFloat(audio.volume) // 当前音量（0 到 1 范围）
  switch (type) {
    case 'down':
      if ((currentVolume - addnumber).toFixed(1) <= 0) {
        audio.volume = 0
        volumeControl.value = audio.volume
        setAudioMuted(true)
      } else {
        audio.volume = (currentVolume - addnumber).toFixed(1)
        volumeControl.value = audio.volume
        setAudioMuted(false)
      }
      break
    case 'up':
      if ((currentVolume + addnumber).toFixed(1) >= 1) {
        audio.volume = 1
        volumeControl.value = audio.volume
        setAudioMuted(false)
      } else {
        audio.volume = (currentVolume + addnumber).toFixed(1)
        volumeControl.value = audio.volume
        setAudioMuted(false)
      }
      break
  }
}

// 格式化时间
function formatTime(time) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
}
