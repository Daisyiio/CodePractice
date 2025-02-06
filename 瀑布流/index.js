const container = document.getElementById('container')
const imgWidth = 220
function createImgs() {
  for (var i = 0; i <= 40; i++) {
    let src = `https://picsum.photos/200/${Math.floor(Math.random() * 100) + 200
      }?random=${i}`
    let img = document.createElement('img')
    img.onLoad = setPositions()
    img.src = src
    container.appendChild(img)
  }
}

createImgs()

function setPositions() {
  var info = cal()
  var nextTops = new Array(info.columns)
  nextTops.fill(0)
  for (var i = 0; i < container.children.length; i++) {
    var img = container?.children[i]
    var minTop = Math.min.apply(null, nextTops)
    img.style.top = minTop + 'px'
    var index = nextTops.indexOf(minTop)
    nextTops[index] += img.height + info.space
    var left = [index + 1] * info.space + index * imgWidth
    img.style.left = left + 'px'
  }
  var max = Math.max.apply(null, nextTops)
  container.style.height = max + 'px'
}

function cal() {
  var containerWidth = container.clientWidth
  var columns = Math.floor(containerWidth / imgWidth)
  var spaceNumber = columns + 1
  var leftSpace = containerWidth - columns * imgWidth
  var space = leftSpace / spaceNumber
  return {
    space: space,
    columns: columns,
  }
}

// window.onload = setPositions()

var timerId = null

window.onresize = function () {
  if (timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(setPositions, 300)
}
