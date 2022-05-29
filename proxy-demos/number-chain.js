function proxy(n) {
    return new Proxy({ n }, {
        get(target, key) {
            if (key === 'value') {
                return target.n
            }

            if (key in Math) {
                return proxy(Math[key](target.n))
            }
            
            return undefined
        }
    })
}

console.log(proxy(64).sqrt.log2.value)
// 3