
//？ 位置应该怎么写才能输出true
// var a= ?
var a = {
    n:1,
    valueOf:function(){
        return this.n++
    }
}
console.log(a == 1 && a == 2 && a == 3)
