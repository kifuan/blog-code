function observer(obj) {
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
        const result = Reflect.set(target, key, value)

        // Call the observer if it exsits for current property,
        // and pass thisArg as the target of proxy
        observers[key]?.call(target)
        
        return result
    }

    return new Proxy(target, { set })
}


// Whatever x is, y is always x + 1
const ob = observer({
    x: 0,
    y: 1,
}).observe('x', function() {
    this.y = this.x + 1
}).observe('y', function() {
    this.x = this.y - 1
})

ob.x = 10
console.log(ob.y)
// 11

ob.y = 21
console.log(ob.x)
// 20