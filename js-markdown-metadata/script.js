function parser(metadata) {
    return key => {
        const prefix = key + ':'
        const data = metadata.find(s => s.startsWith(prefix))

        return data.substring(prefix.length).trim()
    }
}

const parse = parser([
    'foo: abc',
    'bar: def'
])

console.log(parse('foo'))
// abc

console.log(parse('bar'))
// def