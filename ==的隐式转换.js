
//？ 位置应该怎么写才能输出true
// var a= ?
var a = {
    n:1,
    valueOf:function(){
        return this.n++
    }
}
console.log(a == 1 && a == 2 && a == 3)



var b = {
  n:2,
  m:0,
  valueOf:function(){
      return this.n ** this.m++ 
  }
}
console.log(b == 1 && b == 2 && b == 4)



