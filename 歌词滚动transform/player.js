/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象 {time:开始时间 ,word:歌词内容}
 */

function parseLrc() {
  let lines = lrc.split('\n')
  let result = []
  for (let i = 0; i < lines.length; i++) {
    let str = lines[i]
    var part = str.split(']')
    var timeStr = part[0].substring(1)
    let obj = {
      time: parseTime(timeStr) || 0,
      word: part[1] || '',
    }
    result.push(obj)
  }
  return result
}

/**
 * 将时间字符串解析为数字(秒)
 * @param {*} timeStr  时间字符串
 * @returns
 */
function parseTime(timeStr) {
  var parts = timeStr.split(':')
  return +parts[0] * 60 + +parts[1]
}

let lrcData = parseLrc()

let doms = {
  audio: document.querySelector('audio'),
  ul: document.querySelector('.container ul'),
  container: document.querySelector('.container'),
}

// 查找当前播放时间对应的歌词的索引
// 没有歌词 index = -1
function findIndex() {
  let curTime = doms.audio.currentTime
  for (let i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      if (i >= 2) {  //这里还有个问题  现在只向上搜索2句歌词是否为一个时间段的 超过两句就有问题了
        if (lrcData[i - 1].time === lrcData[i - 2].time) {
          return [i - 2, i - 1]
        } else {
          return [i - 1]
        }
      } else {
        return [i - 1]
      }
    }
  }
  // 如果找不到 就显示最后一句
  return [lrcData.length - 1]
}

function createLrcElements() {
  let frag = document.createDocumentFragment() //文档片段 先收集dom 再一起添加
  for (let i = 0; i < lrcData.length; i++) {
    let li = document.createElement('li')
    li.textContent = lrcData[i].word
    frag.appendChild(li)
  }
  doms.ul.appendChild(frag)
}
createLrcElements()

let containerHeight = doms.container.clientHeight
let liHeight = doms.ul.children[0].clientHeight
let maxOffset = doms.ul.clientHeight - containerHeight
function setOffset() {
  let indexarr = findIndex()
  let li = doms.ul.querySelectorAll('.active')
  if (li) {
    li.forEach((item) => {
      item.classList.remove('active')
    })
  }
  let offset = 0
  offset =
    liHeight * indexarr[indexarr.length - 1] +
    liHeight / 2 -
    containerHeight / 2
  if (offset < 0) {
    offset = 0
  }
  if (offset > maxOffset) {
    offset = maxOffset
  }
  doms.ul.style.transform = `translateY(-${offset}px)`
  for (let i = 0; i < indexarr.length; i++) {
    doms.ul.children[indexarr[i]].classList.add('active')
  }
}
doms.audio.addEventListener('timeupdate', () => {
  setOffset()
})
