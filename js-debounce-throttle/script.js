function debounce(fn, delay) {
    let timeout = undefined

    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = undefined
            fn.apply(this, arguments)
        }, delay)
    }
}

function throttle(fn, delay) {
    let timeout = undefined

    return function() {
        if (timeout !== undefined) {
            return
        }
        timeout = setTimeout(() => {
            timeout = undefined
            fn.apply(this, arguments)
        }, delay)
    }
}

function throttleDate(fn, delay) {
    let prev = Date.now()

    return function() {
        const now = Date.now()

        if (now - prev < delay) {
            return
        }
        
        prev = now
        fn.apply(this, arguments)
    }
}