function asyncValue(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), value * 100)
    })
}


(async() => {
    const arr = [2, 4, 5].map(asyncValue)

    for await (const i of arr) {
        console.log(i)
    }
    // 2 4 5
})()