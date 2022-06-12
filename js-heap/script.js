class Heap {
    // We don't use vals[0].
    vals = [ NaN ]

    _swap(i, j) {
        const temp = this.vals[i]
        this.vals[i] = this.vals[j]
        this.vals[j] = temp
    }

    _percolateDown() {
        let cur = 1
        while (true) {
            const left = cur * 2
            const right = left + 1
            let child = left

            if (left >= this.vals.length) {
                return
            }

            // Finds the subscript of minimal value between left and right.
            if (right < this.vals.length && this.vals[left] > this.vals[right]) {
                child = right
            }

            if (this.vals[child] > this.vals[cur]) {
                return
            }

            this._swap(child, cur)
            cur = child
        }
    }

    _percolateUp() {
        let cur = this.vals.length - 1
        while (true) {
            const parent = Math.floor(cur / 2)
            if (parent < 1 || this.vals[cur] > this.vals[parent]) {
                return
            }
            this._swap(parent, cur)
            cur = parent
        }
    }

    get length() {
        return this.vals.length - 1
    }

    get top() {
        return this.vals[1] ?? NaN
    }

    pop() {
        this._swap(1, this.vals.length - 1)
        const val = this.vals.pop()
        this._percolateDown()
        return val
    }

    push(val) {
        this.vals.push(val)
        this._percolateUp()
    }
}

function getTopK(nums, k) {
    const heap = new Heap()
    nums.forEach(n => {
        if (heap.length < k) {
            heap.push(n)
        } else if (n > heap.top) {
            heap.pop()
            heap.push(n)
        }
    })
    
    const result = []
    while (heap.length > 0) {
        result.push(heap.pop())
    }
    return result
}

const top3 = getTopK([5, 4, 10, 1, 6, 9, 2, 8], 3)
console.log(top3)
