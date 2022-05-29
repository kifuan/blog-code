function forOf(obj, action) {
    const itor = obj[Symbol.iterator]()

    while (true) {
        const res = itor.next()

        if (res.done) {
            break
        }

        action(res.value)
    }
}

forOf([1, 2, 3], console.log)
// 1 2 3