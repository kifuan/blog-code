function sleepSort(nums) {
    const result = []
    return new Promise(resolve => {
        for (const num of nums) {
            setTimeout(() => {
                result.push(num)
                if (result.length === nums.length) {
                    resolve(result)
                }
            }, num * 100)
        }
    })
}


sleepSort([4, 1, 3, 2, 9]).then(console.log)
// [ 1, 2, 3, 4, 9 ]

(async () => {
    const data = await sleepSort([4, 5, 3, 6, 8])
    console.log(data)
    // [ 3, 4, 5, 6, 8 ]
})()