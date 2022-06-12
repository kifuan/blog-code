const obj = {
    hello() {
        console.log('Hello from obj')
        this.hello = () => {}
    }
}

obj.hello()
obj.hello()

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
    console.log('Hello from foo')
})

foo()
foo()
foo()
