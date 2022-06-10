const barStorage = new WeakMap()

class Foo {
    constructor(bar) {
        barStorage.set(this, bar)
    }

    get bar() {
        return barStorage.get(this)
    }

    set bar(_) {
        throw new Error('cannot set private member!')
    }
}

const foo1 = new Foo(2)
const foo2 = new Foo(3)

console.log(foo1.bar, foo2.bar)
// 2 3

// foo1.bar = 21
// Error: cannot set private member!

// barStorage.set(1, 2)
// TypeError: Invalid value used as weak map key
