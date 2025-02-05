class Person {
  constructor(public name: string, public age: number) {

  }
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



interface PersonInterface {
  name: string;
  age: number;
  speak(n: number): void
}


class Person2 implements PersonInterface {
  constructor(public name: string, public age: number) {

  }
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
  constructor(public name: string, public age: number) {

  }
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


