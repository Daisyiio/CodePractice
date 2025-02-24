document.addEventListener('keydown', function (event) {
  event.preventDefault() // 禁止所有默认的键盘事件
  let code = event.code
  console.log(code, 'code')
  switch (code) {
    case 'Space': // 空格键控制播放/暂停
      if (window.toggleAudioPlayPause) {
        window.toggleAudioPlayPause() // 调用暴露的函数
      }
      break
    case 'ArrowUp':
      window.volumeUpAndDown('up')
      break
    case 'ArrowDown':
      window.volumeUpAndDown('down')
      break
  }
})
