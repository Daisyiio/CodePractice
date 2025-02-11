function debounce(fn, delay) {
    let time
    return function (...arg) {
        const context = this
        clearTimeout(time)
        setTimeout(() => {
            fn.apply(context, arg)
        }, delay);
    }
}


