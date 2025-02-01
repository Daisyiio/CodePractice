/**
 *
 *
 * 判断对象中是否存在某个属性
 * @param {Object} obj 对象
 * @param {String} key  属性名
 */

function hasProperty(obj, key) {
  return key in obj //会找原型链上的属性
  // return obj.hasOwnProperty(key); //只会找自身
  // return Object.keys(obj).includes(key); //defineProperty 添加 enumerable:false 读取不到
}

// Object.defineProperty(obj,'c',{
//     enumerable:false,  //是否可被遍历到
//     value:1
// })
