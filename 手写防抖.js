

// 防抖
function debounce(fn, delay) {
    let time
    return function (...arg) {
        const context = this
        time = clearTimeout(time)
        setTimeout(() => {
            fn.apply(context, arg)
        }, delay);
    }
}





//节流



function throttle(fn, wait) {
    let lastTime = null
    return function (...arg) {
        const now = Date.now()
        const context = this
        if (now - lastTime >= wait) {
            fn.apply(context, arg);
            lastTime = now
        }
    }
}



function debounce(fn, wait) {
    let time
    return function (...arg) {
        const context = this
        clearTimeout(time)
        time = setTimeout(() => {
            fn.apply(context, arg)
        }, wait);
    }
}





function throttle(fn, wait) {
    let lasttime = null
    return function (...arg) {
        const context = this
        const now = Date.now()
        if (now - lasttime >= wait) {
            fn.apply(context, ...arg)
            lastTime = now
        }
    }
}




throttle(fn, wait){
    let lastTime = Date.now()
    return function (...arg) {
        const now = Date.now()
        const context = this
        if (now - lasttime >= wait) {
            fn.apply(context, ...arg)
            lastTime = now
        }
    }
}





