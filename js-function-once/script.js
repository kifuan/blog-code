function once(f) {
    let called = false
    return new Proxy(f, {
        apply(target, thisArg, argArray) {
            if (called) {
                return
            }
            called = true
            return Reflect.apply(target, thisArg, argArray)
        }
    })
}

const foo = once(function() {
    console.log('Hello world')
})

foo()
foo()