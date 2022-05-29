function* values() {
    yield 1
    yield 2
    yield 3
}

console.log([...values()])
// [ 1, 2, 3 ]