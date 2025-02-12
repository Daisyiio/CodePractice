class Example {

  constructor(name) {
    this.name = name
  }
  fnc() {
    console.log(this.name)
  }
}






'use strict'  //严格模式
function Example(name) {
  // if(!(this instanceof Example)){
  //   throw new TypeError(`Class constructor Example cannot be invoked without 'new' `)
  // }
  if (!(new.target)) {
    throw new TypeError("Example must be instantiated with 'new'");
  }
  this.name = name
}

// Example.prototype.fnc =  function(){
//   if(!(this instanceof Example)){
//     throw new TypeError(`Class constructor Example cannot be invoked without 'new' `)
//   }
//   console.log(this.name)
// }


Object.defineProperty(Example.prototype, 'fnc', {
  value: function () {
    // if(!(this instanceof Example)){
    //   throw new TypeError(`Class constructor Example cannot be invoked without 'new' `)
    // }
    if (!(new.target)) {
      throw new TypeError("Example must be instantiated with 'new'");
    }
    console.log(this.name)
  },
  writable: true,
  configurable: true,
  enumerable: false
})

