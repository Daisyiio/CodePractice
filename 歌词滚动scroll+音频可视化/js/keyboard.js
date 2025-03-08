document.addEventListener('keydown', function (event) {
  event.preventDefault() // 禁止所有默认的键盘事件
  let code = event.code
  console.log(code, 'code')
  switch (code) {
    case 'Space': // 空格键控制播放/暂停
      window.toggleAudioPlayPause && window.toggleAudioPlayPause()
      break
    case 'ArrowUp': // 音量提高
      window.volumeUpAndDown('up')
      break
    case 'ArrowDown': // 音量降低
      window.volumeUpAndDown('down')
      break
    case 'ArrowLeft': // 进度减少du 左移
      window.setDurationUpAndDown('left')
      break
    case 'ArrowRight': // 进度增加du 右移
      window.setDurationUpAndDown('right')
      break
  }
})
