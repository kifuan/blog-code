function range(end) {
    let start = 0
    return {
        next() {
            if (start === end) {
                return { done: true }
            }
            return { value: start++, done: false }
        },

        [Symbol.iterator]() {
            return this
        }
    }
}

for (const i of range(5)) {
    console.log(i)
}
// 0 1 2 3 4