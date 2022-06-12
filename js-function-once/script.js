function once(f) {
    let called = false

    function apply(target, thisArg, args) {
        if (called) {
            return
        }
        called = true
        return Reflect.apply(target, thisArg, args)
    }

    return new Proxy(f, { apply })
}

const foo = once(() => {
    console.log('Hello world')
})

foo()
foo()
foo()
