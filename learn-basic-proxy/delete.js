'use strict'

const target = {
    foo: 1,
    _bar: 2,
}

const p = new Proxy(target, {
    deleteProperty(target, key) {
        if (key[0] === '_') {
            return false
        }
        return Reflect.deleteProperty(target, key)
    }
})

delete p.foo

delete p._bar
// TypeError: 'deleteProperty' on proxy: trap returned falsish for property '_bar'