Function.prototype.myCall = function(context,...args){
    context = context === null || context === undefined ? globalThis:Object(context)
    const fn  = this
    const key = Symbol() 
    context[key] = fn
    const result = context[key](...args)
    return result;
}

function method(a,b){
    console.log('args',a,b)
    console.log('this',this)
}


method.call(1,2,3)