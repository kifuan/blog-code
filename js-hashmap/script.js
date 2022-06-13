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

    _findIndexToInsert(key) {
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
        const index = this._findIndexToInsert(key)

        if (index === -1) {
            this._rehash()
            this.set(key, val)
            return
        }

        this.elements[index] = { empty: false, key, val }
    }

    _findIndexToModify(key) {
        let index = this._hash(key)
        while (index < this.elements.length) {
            const el = this.elements[index]
            if (el.key === undefined) {
                return -1
            }

            if (el.key === key && !el.empty) {
                return index
            }

            index++
        }

        return -1
    }

    delete(key) {
        const index = this._findIndexToModify(key)
        if (index === -1) {
            return false
        }
        this.elements[index].empty = true
        return true
    }

    get(key) {
        return this.elements[this._findIndexToModify(key)].val
    }

    get length() {
        return this.elements.reduce((n, el) => {
            return n + !el.empty
        }, 0)
    }
}

function randStr() {
    return Math.random().toString(36).slice(-8)
}

function diffRandStr(s) {
    let result
    do {
        result = randStr()
    } while (result === s)
    return result
}

const entries = []
const removeEntries = []

for (let i = 0; i < 100; i++) {
    const key = randStr()
    const removeKey = diffRandStr(key)
    entries.push([key, randStr()])
    removeEntries.push([removeKey, randStr()])
}

const map = entries.concat(removeEntries).reduce((map, [key, val]) => {
    map.set(key, val)
    return map
}, new HashMap())

removeEntries
    .map(e => e[0])
    .forEach(key => {
        console.assert(map.delete(key), 'Failed to delete', key)
    })

console.assert(map.length === entries.length, 'Incompatible length', map.length, entries.length)

entries.forEach(([key, val]) => {
    console.assert(map.get(key) === val, key, val)
})
