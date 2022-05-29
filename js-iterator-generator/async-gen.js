function asyncValue(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), value * 100)
    })
}

async function* asyncRange(end) {
    for (let i = 0; i < end; i++) {
        yield await asyncValue(i)
    }
}

(async() => {
    for await (const i of asyncRange(5)) {
        console.log(i)
    }
    // 0 1 2 3 4
})()