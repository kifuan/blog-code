const target = {
    foo: 1,
    _bar: 2,
}

const p = new Proxy(target, {
    get(target, key, receiver) {
        if (key[0] === '_') {
            return undefined
        }

        return Reflect.get(target, key, receiver)
    }
})


console.log(p.foo)
// 1

console.log(p._bar)
// undefined