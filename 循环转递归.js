const arr = [1, 2, 3, 4, 5, 6, 7]
//实现求和 不用循环 不用数组工具函数

function sum(arr, i) {
  if (i >= arr.length) return false
  return arr[i] + sum(arr, i + 1)
}

let all = sum(arr, 0)


console.log(all, 'all')

// for (初始代码; 条件代码; 循环代码) {
//   //循环体
// }

// function m() {
//   初始代码
//   function _m() {
//     if (!条件代码) {
//       return
//     }
//     循环体
//     循环代码
//     _m()
//   }
//   _m()
// }

let res = 0
for (let i = 0; i < arr.length; i++) {
  res += arr[i]
}

function m() {
  let res = 0
  let i = 0
  function _m() {
    if (i >= arr.length) {
      return
    }
    res += arr[i]
    i++
    _m()
  }
  _m()
  console.log(res)
}
m()





function m() {
  let res = 0
  let i = 0
  function _m() {
    if (i >= arr.length) {
      return
    }
    res += arr[i]
    i++
    _m()
  }
  _m()
  console.log(res)
}





