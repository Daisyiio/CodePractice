//为什么需要箭头函数

//消除函数的二义性

//函数的含义
//1.指令序列
//2.创建实例



class A {
  abc() {}
}
 new A()
//  A()
const a = () => {
  console.log('a')
}
// new a()
a()

// function a(){}

// a()
// new a();
