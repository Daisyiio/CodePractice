type METHOD = 'POST' | 'GET' | 'PUT'
//添加新的联合类型之后  会在编译时就报错 可以降低寻找错误的成本

function request(method: METHOD, url: string) {
  switch (method) {
    case 'POST':
      return '111'
    case 'GET':
      return '222'
    default:
      let n: never = method
  }
}

function log<T>(x: T extends number ? never : T) {}
//除了number 类型别的都行


// 优化
type BandType<T, K> = T extends K ? never : T
function log2<T>(x: BandType<T, string>) {}


