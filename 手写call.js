Function.prototype.myCall = function(context,...args){
    context = context === null || context === undefined ? globalThis:Object(context)
    const key = Symbol()
    Object.defineProperty(context,key,{
        enumerable:false,
        value:this
    }) 
    const result = context[key](...args)
    return result;
}

function method(a,b){
    console.log('args',a,b)
    console.log('this',this)
}


method.myCall({},2,3)

method.call({},2,3)

 