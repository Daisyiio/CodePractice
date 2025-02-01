function  increase(a){
    a++;
}

var a = 1
increase(a)
increase(a)
console.log(a) //1


// 解释：
// a 是基本类型（数字）：
// 在 JavaScript 中，基本类型（如 number、string、boolean 等）是通过 值传递 的。
// 当 a 作为参数传递给 increase 函数时，传递的是 a 的值的副本，而不是 a 本身。
// 函数内部对 a 的修改（a++）只会影响副本，不会影响外部的 a。
// 结果：
// 外部的 a 始终是 1，因为函数内部的修改不影响外部的变量。


function increaseObj(obj){
    obj = {
        n:2
    }
}

var obj = {
    n:1
}

increaseObj(obj)
increaseObj(obj)

console.log(obj) // {n:1}


// 解释：
// obj 是对象类型：
// 在 JavaScript 中，对象是通过 引用传递 的。
// 当 obj 作为参数传递给 increaseObj 函数时，传递的是 obj 的引用（内存地址）。
// 但是，函数内部对 obj 的重新赋值（obj = { n: 2 }）会断开与外部 obj 的引用关系，并创建一个新的对象。
// 这个新对象只在函数内部有效，不会影响外部的 obj。
// 结果：
// 外部的 obj 仍然是 { n: 1 }，因为函数内部的重新赋值不影响外部的变量。

function increaseObj2(obj){
  obj.n++
}


var obj2 = {
    n:1
}


increaseObj2(obj2)
increaseObj2(obj2)

console.log(obj2) // {n:3}



// 解释：
// obj2 是对象类型：
// 对象是通过 引用传递 的。
// 当 obj2 作为参数传递给 increaseObj2 函数时，传递的是 obj2 的引用（内存地址）。
// 函数内部通过 obj.n++ 直接修改了 obj2 的属性 n，因为 obj 和 obj2 指向同一个对象。
// 结果：
// 外部的 obj2 被修改为 { n: 3 }，因为函数内部直接修改了对象的属性。





// 总结：
// 行为	基本类型（如 number）	对象类型（如 object）
// 传递方式	值传递	引用传递
// 函数内部修改变量	不影响外部变量	不影响外部变量（如果重新赋值）
// 函数内部修改对象属性	不适用	影响外部对象
// 基本类型：函数内部修改的是副本，不影响外部变量。

// 对象类型：

// 如果重新赋值（obj = { ... }），不影响外部对象。

// 如果修改属性（obj.n++），会影响外部对象。
