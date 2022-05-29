'use strict'

const target = {
    foo: 1,
    _bar: 2
}

const p = new Proxy(target, {
    set(target, key, value, receiver) {
        if (key[0] === '_') {
            return false
        }
        return Reflect.set(target, key, value, receiver)
    }
})

p.foo = 10

p._bar = 20
// TypeError: 'set' on proxy: trap returned falsish for property '_bar'