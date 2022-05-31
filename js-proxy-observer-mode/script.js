function observable(obj) {
    const observers = {}

    // Not modifying the argument directly,
    // use Object.assign instead
    const target = Object.assign({
        observe(key, fn) {
            observers[key] = fn
            // For method chaining
            return this
        }
    }, obj)

    const set = (target, key, value) => {
        const oldVal = Reflect.get(target, key)

        // Call the observer if it exsits for current property,
        // and pass old value and new value as arguments
        observers[key]?.call(undefined, oldVal, value)
        
        return Reflect.set(target, key, value)
    }

    return new Proxy(target, { set })
}


const ob = observable({
    x: 0,
    y: 1,
}).observe('x', (oldVal, newVal) => {
    console.log(`x: ${oldVal} -> ${newVal}`)
}).observe('y', (oldVal, newVal) => {
    console.log(`y: ${oldVal} -> ${newVal}`)
})

ob.x = 10
// x: 0 -> 10

ob.y = 20
// y: 1 -> 20