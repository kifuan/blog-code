function isPrime(n) {
    if (n <= 1) {
        return false
    }

    if (n > 2 && n % 2 === 0) {
        return false
    }

    const max = Math.floor(Math.sqrt(n))
    for (let i = 3; i <= max; i += 2) {
        if (n % i === 0) {
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

const primes = [
    2, 3, 5, 7, 11, 13, 17, 19,
    23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79,
    83, 89, 97,
]

for (let i = 1; i < 100; i++) {
    console.assert(isPrime(i) === primes.includes(i), i)
}

class HashMap {
    elements = []

    constructor() {
        this._createElements(4)
    }

    _createElements(length) {
        length = nextPrime(length)
        this.elements = Array.from({ length }, () => ({ empty: true }))
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
        while (index < this.elements.length) {
            const el = this.elements[index]
            if (el.empty || el.key === key) {
                return index
            }
            index++
        }
        return -1
    }

    _rehash() {
        const old = this.elements.filter(el => !el.empty)
        this._createElements(this.elements.length * 2)
        old.forEach(el => this.set(el.key, el.val))
    }

    set(key, val) {
        const index = this._findIndex(key)

        if (index === -1) {
            this._rehash()
            this.set(key, val)
            return
        }

        this.elements[index] = { empty: false, key, val }
    }

    delete(key) {
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
    map.set(key, val)
    return map
}, new HashMap())

entries.forEach(([key, val]) => {
    console.assert(map.get(key) === val)
})

const removeKeys = ['foo', 'bar', 'baz']
removeKeys.forEach(key => console.assert(map.delete(key)))

console.assert(map.length === entries.length - 3)
