const s = '123'


s.c = '4'
s.d = '5'

const [a,b] = s
const {c,d} = s
console.log(a) //1
console.log(b) //2
console.log(c)  //undefined
console.log(d) //undefined


// 字符串是基本类型，不能真正存储新属性。
// 解构赋值 [a, b] = s; 是因为字符串是可迭代对象。
// 对象解构 { c, d } = s; 失败，因为 c 和 d 没有真正存储。
// 如果想让字符串存储属性，可以用 new String('123')。