function curry(f, ...savedArgs) {
    return function() {
        const totalArgs = [...savedArgs, ...arguments]
        if (totalArgs.length >= f.length) {
            return f(...totalArgs)
        }
        return curry(f, ...totalArgs)
    }
}

const add = (a, b, c) => a + b + c


console.log(curry(add)(1)(2)(3))
console.log(curry(add)(1, 2)(3))
console.log(curry(add)(1)(2, 3))
console.log(curry(add)(1, 2, 3))
// All of them should be 6