function* walk(str) {
  let part = ''
  let terminals = ['.', '-']
  for (var i = 0; i < str.length; i++) {
    if (terminals.includes(str[i])) {
      yield part
      part = ''
    } else {
      part += str[i]
    }
  }
  if (part) {
    yield part
  }
}

let iterator = walk('1.5.6-alpha.1')
for (const item of iterator) {
  console.log(item, 'item')
}


//语义版本规范 :X.Y.Z[-P]
// 12.3.1
// 5.7.8
// 1.5.6-alpha.1
// 7.2.3-beta 



