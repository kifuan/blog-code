const arr = [1, 2, 3]

console.log('No initial value')
let result = arr.reduce((pre, cur) => {
    console.log(pre, cur)
    return pre + cur
})
console.log('Result is', result)

console.log('\nWith initial value')
result = arr.reduce((pre, cur) => {
    console.log(pre, cur)
    return pre + cur
}, 0)
console.log('Result is', result)

/*
No initial value
1 2
3 3
Result is 6

With initial value
0 1
1 2
3 3
Result is 6
 */