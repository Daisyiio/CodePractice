//让下面代码成立


// Object.prototype[Symbol.iterator] = function () {
//   //   const arr = [3,4]
//   //    ||
//   // const arr =  Object.values(this)
//   //    ||
//   return Object.values(this)[Symbol.iterator]()
// }

// ES6 生成器
Object.prototype[Symbol.iterator] = function* () {
    yield* Object.values(this)
  }

let [a, b] = {
  a: 3,
  b: 4,
}

console.log(a, b) // 要让代码成立，需要让对象 `{ a: 3, b: 4 }` 可以被解构为数组形式 `[a, b]`。
// JavaScript 中，数组解构是基于可迭代对象（iterable）的，而普通对象默认不是可迭代的。因此，我们需要让对象实现可迭代协议。

// 可以通过为对象添加 `[Symbol.iterator]` 方法来实现这一点。以下是修改后的代码：

// ```javascript
// let obj = {
//   a: 3,
//   b: 4,
//   [Symbol.iterator]: function* () {
//     yield this.a;
//     yield this.b;
//   },
// };

// let [a, b] = obj;

// console.log(a, b); // 输出: 3 4
// ```

// ### 解释：
// 1. 我们为对象 `obj` 添加了一个 `[Symbol.iterator]` 方法，使其成为一个可迭代对象。
// 2. 这个方法是一个生成器函数（`function*`），它会依次 `yield` 对象的 `a` 和 `b` 属性值。
// 3. 解构赋值 `let [a, b] = obj` 会调用对象的迭代器，依次将 `a` 和 `b` 的值赋给变量 `a` 和 `b`。

// 这样，代码就可以正常运行并输出 `3 4`。
