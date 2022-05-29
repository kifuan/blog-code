function asyncValue(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), value * 100)
    })
}

function asyncRange(end) {
    let start = 0

    return {
        async next() {
            if (start === end) {
                return { done: true }
            }

            const value = await asyncValue(start++)
            return { value, done: false }
        },

        [Symbol.asyncIterator]() {
            return this
        }
    }
}

(async() => {
    for await (const i of asyncRange(5)) {
        console.log(i)
    }
    // 0 1 2 3 4
})()