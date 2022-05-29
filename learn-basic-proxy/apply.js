function sum(a, b) {
    return a + b
}

const p = new Proxy(sum, {
    apply(target, thisArg, args) {
        return -Reflect.apply(target, thisArg, args)
    }
})

console.log(sum(1, 2))
// 3

console.log(p(1, 2))
// -3