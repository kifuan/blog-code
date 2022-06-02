class NumberReader {
    constructor(start) {
        this.pos = start
    }

    read() {
        return this.pos++
    }
}

class DoubleReader {
    constructor(reader) {
        this.reader = reader
    }

    read() {
        return this.reader.read() * 2
    }
}

class CharReader {
    constructor(reader) {
        this.reader = reader
    }

    read() {
        const code = 'a'.charCodeAt(0) + this.reader.read()
        return String.fromCharCode(code)
    }
}

class UpperCharReader {
    constructor(reader) {
        this.reader = reader
    }

    read() {
        return this.reader.read().toUpperCase()
    }
}

const reader = new UpperCharReader(
    new CharReader(
        new DoubleReader(
            new NumberReader(5)
        )
    )
)

console.log(reader.read())
// K

console.log(reader.read())
// M
