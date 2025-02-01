// call
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person1 = { name: 'Alice' };
  
  greet.call(person1, 'Bob');
  // 输出：Hello, Bob! My name is Alice.




//   apply
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person2 = { name: 'Alice' };
  
  greet.apply(person2, ['Bob']);
  // 输出：Hello, Bob! My name is Alice.



  //bind

  function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person3 = { name: 'Alice' };
  const boundGreet = greet.bind(person3, 'Bob');
  
  boundGreet();
  // 输出：Hello, Bob! My name is Alice.