function* range(end) {
    for (let i = 0; i < end; i++) {
        yield i
    }
}

for (const i of range(5)) {
    console.log(i)
}
// 0 1 2 3 4

const r = range(5)
console.log(r)
// Object [Generator] {}

const itor = r[Symbol.iterator]()
console.log(r === itor)
// true