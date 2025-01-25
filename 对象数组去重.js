const arr = [
  { a: 1, b: 2 },
  { b: 2, a: 1 },
  { a: 1, b: 2, c: { a: 1, b: 2 } },
  { a: 1, b: 2, c: { b: 2, a: 1 } },
]

const isObject = (val) => typeof val === 'object' && val !== null
//这个函数用于检查一个值是否是对象（并且不为 null，因为 typeof null 也会返回 'object'）。

//对象数组去重，只要对象的所有属性值相同 则表示相同对象

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (equals(arr[i], arr[j])) {
      arr.splice(j, 1) // 去除 arr[j]
      j-- // 由于删除了一个元素，j 需要回退
    }
  }
}


function equals(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return Object.is(obj1, obj2) // 对于基本类型进行比较，使用 Object.is 以处理特殊情况
  }
  if (obj1 === obj2) return true // 引用地址相同
  const objKeys1 = Object.keys(obj1)
  const objKeys2 = Object.keys(obj2)

  if (objKeys1.length !== objKeys2.length) return false // 属性数量不同，肯定不相等
  for (const key of objKeys1) {
    if (!objKeys2.includes(key)) {
      return false // 如果有某个 key 在 obj2 中没有，返回 false
    }
    const res = equals(obj1[key], obj2[key]) // 递归比较对象属性值
    if (!res) return false // 如果某个属性值不同，返回 false
  }
  return true
}

//equals 函数用于比较两个对象是否相等：
// 如果两个对象不是对象类型，直接使用 Object.is 比较。
// 如果两个对象引用相同，直接返回 true（即它们是同一个对象）。
// 对象的键和值逐个进行递归比较，若某个属性不同，则返回 false。
// 特别注意： Object.is() 处理了两个特殊情况：

// NaN === NaN（=== 会认为 NaN 和 NaN 不相等）
// +0 === -0（=== 会认为它们相等）

console.log(arr, 'arr')

