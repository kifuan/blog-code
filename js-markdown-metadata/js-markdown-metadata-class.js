class Parser {
    metadata = new Map()

    constructor(metadata) {
        for (const data of metadata) {
            const [key, value] = data.split(/\s*:\s*/)
            this.metadata.set(key, value)
        }
    }

    parse(key) {
        return this.metadata.get(key)
    }
}

const metadata = [
    'foo: abc',
    'bar: def'
]

const parser = new Parser(metadata)

console.log(parser.parse('foo'))
// abc

console.log(parser.parse('bar'))
// def