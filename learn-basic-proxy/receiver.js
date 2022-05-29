let obj

const p = new Proxy({}, {
    get(target, key, receiver) {
        if (receiver === obj) {
            console.log('receiver is obj')
        } else if (receiver === p) {
            console.log('receiver is p')
        }
        return undefined
    }
})

obj = Object.create(p)

p.foo
// receiver is p

obj.foo
// receiver is obj