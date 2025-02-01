const obj = {
  arr: [],
  a: 4,
}
obj.sub = obj
obj.arr.push(obj)

// function deepClone(value){
//   const cache = new Map()
//   function _deepClone(value){
//     if(value ===null || typeof value !== 'object'){
//       return value
//     }
//     if(cache.has(value)){
//       return cache.get(value)
//     }
//     const result =  Array.isArray(value) ? []:{};

//     cache.set(value,result)
//     for(const key in value){
//       result[key] = _deepClone(value[key])
//     }
//     return result
//   }
//     return _deepClone(value)
// }

const newObj = deepClone(obj)
console.log(newObj.arr !== obj.arr)
console.log(newObj.sub !== obj.sub)
console.log(newObj.arr[0] !== obj)
console.log(newObj.arr[0] === newObj)

// 这段代码是一个用于深拷贝（deep clone）对象或数组的函数实现，核心思想是通过递归遍历原始数据结构中的每个键值，并通过缓存来避免循环引用导致的无限递归。总体上，这段代码实现了深拷贝的基本功能，效果是可行的。但它仍然可以改进和优化。下面是一些评价和建议：

// 优点
// 避免循环引用：
// 通过使用 cache（Map）来存储已经拷贝过的对象，避免了处理具有循环引用的对象。这是一个重要的性能优化，防止了深度递归时出现无限循环。

// 适应数组和对象：
// 使用 Array.isArray(value) 来判断是否为数组，根据不同类型创建不同的结果对象（[] 或 {}）。这样既支持对象，也支持数组的深拷贝。

// 递归遍历：
// 使用递归方式遍历对象或数组中的每个元素，确保完成深拷贝，即使是嵌套的对象和数组也能正确处理。

//优化
function deepClone(value) {
  const cache = new Map()

  function _deepClone(value) {
    if (value === null || typeof value !== 'object') {
      return value
    }

    // 处理循环引用
    if (cache.has(value)) {
      return cache.get(value)
    }

    // 处理特殊对象
    if (value instanceof Date) {
      return new Date(value.getTime())
    }

    if (value instanceof RegExp) {
      return new RegExp(value)
    }

    const result = Array.isArray(value) ? [] : {}

    // 缓存当前对象
    cache.set(value, result)

    // 递归拷贝对象/数组的每个属性
    Object.keys(value).forEach((key) => {
      result[key] = _deepClone(value[key])
    })

    return result
  }

  return _deepClone(value)
}





function deepClone(value){
  if(value ===null || typeof value !=='object')
  {
    return value 
  }
  if(Array.isArray(value)){
    let clone = []
    for(let i =0;i<value.length;i++){
      clone[i] = deepClone(value[i])
    }
    return clone
  }
  else if(typeof value ==='object'){
    let clone = {}
    for(let key in value){
      clone[key] = deepClone(value[key])
    }
    return clone 
  }
  
}



function deepClone(value){
  if(value === null || typeof value !=='object'){
    return value 
  }
  let clone = Array.isArray(value)? [] :{}
  for(let key in value ){
    clone[key] = deepClone(value[key])
  }
  return clone
}