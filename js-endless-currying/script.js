const curry = (f, ...outer) => {
    return (...inner) => {
        if (outer.length + inner.length >= f.length) {
            return f(...outer, ...inner)
        }
        return curry(f, ...outer, ...inner)
    }
}

const add = (a, b, c) => a + b + c


console.log(curry(add)(1)(2)(3))
console.log(curry(add)(1, 2)(3))
console.log(curry(add)(1)(2, 3))
console.log(curry(add)(1, 2, 3))
// All of them should be 6