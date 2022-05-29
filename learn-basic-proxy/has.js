const target = {
    foo: 1,
    _bar: 2,
}

const p = new Proxy(target, {
    has(target, key) {
        if (key[0] === '_') {
            return false
        }
        return Reflect.has(target, key)
    }
})

console.log('foo' in p)
// true

console.log('_bar' in p)
// false