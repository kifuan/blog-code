function range(end) {
    let start = 0

    const iterator = {
        next() {
            if (start === end) {
                return { done: true }
            }
            return { value: start++, done: false }
        }
    }

    return {
        [Symbol.iterator]: () => iterator
    }
}

for (const i of range(5)) {
    console.log(i)
}
// 0 1 2 3 4