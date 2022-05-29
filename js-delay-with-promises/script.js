function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

(async() => {
    console.log("Doing A")
    await sleep(1000)
    console.log("Doing B")
    await sleep(1000)
    console.log("Doing C")
})()