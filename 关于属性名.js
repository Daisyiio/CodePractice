// const obj = {};

// obj.name  // [[GET]](obj,'name',obj) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// obj['name']
/**
 * [[GET]](obj,'name'是symbol?'name':String('name'),obj) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */







// obj[obj] =1
// console.log(obj) //{ '[object Object]': 1 }

// obj[0] =1;
// obj['0'] =2;
// console.log(obj)  //{ '0': 1 }



// const obj = {
//   toString() {
//     return 'abc'
//   },
// }

// obj[obj] = 1

// console.log(obj, 'obj') ///{ String: [Function: String], abc: 1 } obj
