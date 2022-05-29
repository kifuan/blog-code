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
        const oldValue = Reflect.get(target, key, value)

        // Call the observer if it exsits for current property,
        // and pass thisArg as undefined
        observers[key]?.call(undefined, oldValue, value)
        
        return Reflect.set(target, key, value)
    }

    return new Proxy(target, { set })
}


const ob = observer({
    name: 'A',
    age: 18
}).observe('name', (oldValue, newValue) => {
    console.log(`name: old ${oldValue}, new ${newValue}`)
}).observe('age', (oldValue, newValue) => {
    console.log(`age: old ${oldValue}, new ${newValue}`)
})

ob.name = 'B'
// name: old A, new B

ob.age = 20
// age: old 18, new 20
