"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    getDetail() {
        console.log(`${this.name}今年${this.getAge()}岁`);
    }
}
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
let p1 = new Person('张三', 18);
p1.getDetail();
let s1 = new Student('李四', 19, '清华大学');
let a = s1.getSchool();
console.log(a, 'aa');
var Status;
(function (Status) {
    Status[Status["Up"] = 0] = "Up";
    Status[Status["Down"] = 1] = "Down";
    Status[Status["Left"] = 2] = "Left";
    Status[Status["Right"] = 3] = "Right";
})(Status || (Status = {}));
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
        console.log(n);
    }
}
const user = {
    name: '张三',
    gender: '女',
    run: (n) => {
        console.log(n);
    }
};
const count = (a, b) => {
    return a + b;
};
class BaseUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
    }
}
class testUser extends BaseUser {
    constructor(name, age) {
        super(name, age);
    }
    getDetail() {
        console.log(`NAME:${this.name}---AGE:${this.age}`);
    }
}
const testUser1 = new testUser('张三', 12);
testUser1.getDetail();
