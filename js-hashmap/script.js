function isPrime(n) {
    if (n <= 2) {
        return false
    }

    const max = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= max; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

function nextPrime(n) {
    while (!isPrime(n)) {
        n++
    }
    return n
}

class HashMap {
    elements = []

    constructor() {
        this._createElements(4)
    }

    _createElements(length) {
        length = nextPrime(length)
        this.elements = Array(length).fill({ empty: true, key: undefined, val: undefined })
    }

    _hash(key) {
        let val = 0
        for (let i = 0; i < key.length; i++) {
            val = 37 * val + key.charCodeAt(i)
        }
        val %= this.elements.length
        if (val < 0) {
            val += this.elements.length
        }
        return val
    }

    _findIndex(key) {
        let index = this._hash(key)
        while (index < this.elements.length && !this.elements[index].empty) {
            if (this.elements[index].key === key) {
                break
            }
            index++
        }
        if (index === this.elements.length) {
            return -1
        }
        return index
    }

    _rehash() {
        const old = this.elements.filter(el => !el.empty)
        this._createElements(this.elements.length * 2)
        old.forEach(el => this.insert(el.key, el.val))
    }

    insert(key, val) {
        const index = this._findIndex(key)

        if (index === -1) {
            this._rehash()
            this.insert(key, val)
            return
        }

        this.elements[index] = { empty: false, key, val }
    }

    remove(key) {
        const index = this._findIndex(key)
        if (index === -1) {
            return false
        }
        this.elements[index].empty = true
        return true
    }

    get(key) {
        const index = this._findIndex(key)
        if (index === -1) {
            return undefined
        }
        return this.elements[index].val
    }

    get length() {
        return this.elements.reduce((n, el) => {
            return n + !el.empty
        }, 0)
    }
}

const entries = [
    [ 'red',     '#FF0000' ],
    [ 'white',   '#FFFFFF' ],
    [ 'black',   '#000000' ],
    [ 'green',   '#008000' ],
    [ 'yellow',  '#FFFF00' ],
    [ 'blue',    '#0000FF' ],
    [ 'lime',    '#00FF00' ],
    [ 'magenta', '#FF00FF' ],
    [ 'foo',   123 ],
    [ 'bar',   234 ],
    [ 'baz',   345 ],
]

const map = entries.reduce((map, [key, val]) => {
    map.insert(key, val)
    return map
}, new HashMap())

entries.forEach(([key, val]) => {
    console.assert(map.get(key) === val)
})

const removeKeys = ['foo', 'bar', 'baz']
removeKeys.forEach(key => console.assert(map.remove(key)))

console.assert(map.length === entries.length - 3)
