class Person {
  // public name: string;
  // public age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }
  //简写
  constructor(public name: string, public age: number) { }

  getAge() {
    return this.age;
  }
  getDetail() {
    console.log(`${this.name}今年${this.getAge()}岁`)
  }
}



class Student extends Person {
  constructor(name: string, age: number, public school: string) {
    super(name, age)
    // 在子类的构造函数中，必须先调用 super()，然后才能使用 this。
    // super(...) 用于调用父类的构造函数，并传递参数。
    // super.方法名() 可用于调用父类的方法。
    // super 只能在 class 继承（extends）时使用。
    // 🚀 super 主要作用就是帮助子类调用和复用父类的构造函数和方法！
  }
  getSchool() {
    return this.school;
  }
}

let p1 = new Person('张三', 18)
p1.getDetail()



let s1 = new Student('李四', 19, '清华大学')
let a = s1.getSchool()
console.log(a, 'aa')



enum Status {
  Up,
  Down,
  Left,
  Right

}


// 定义一个接口，规定 Person2 必须具备的属性和方法
interface PersonInterface {
  name: string;
  age: number;
  speak(n: number): void
}

// 使用 implements 关键字，让 Person2 类符合 PersonInterface 规范
class Person2 implements PersonInterface {
  constructor(public name: string, public age: number) {}
  speak(n: number): void {
    console.log(n)
  }
}





interface UserInterface {
  name: string;
  readonly gender: '男' | '女';
  age?: number;
  run: (n: number) => void
}


const user: UserInterface = {
  name: '张三',
  gender: '女',
  run: (n: number) => {
    console.log(n)
  }
}





interface CountInterface {
  (a: number, b: number): number
}

const count: CountInterface = (a: number, b: number): number => {
  return a + b
}





interface BaseUser {
  name: string,
  age: number
}
interface PersonInterfaceCf {
  gender: string
}

type PersonType = PersonInterfaceCf | {
  type: string
}





abstract class BaseUser {
  constructor(public name: string, public age: number) {}
  abstract getDetail(): void
  getName() {

  }
}

class testUser extends BaseUser {
  constructor(name: string, age: number) {
    super(name, age)
  }

  getDetail() {
    console.log(`NAME:${this.name}---AGE:${this.age}`)
  }

}



const testUser1 = new testUser('张三', 12)
testUser1.getDetail()


