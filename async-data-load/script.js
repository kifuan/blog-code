let data

function setDataAsync() {
    setTimeout(() => {
        data = 114514
    }, 1000)
}

setDataAsync()

const interval = setInterval(() => {
    if (data !== undefined) {
        console.log(data)
        // 114514
        clearInterval(interval)
    }
}, 500)