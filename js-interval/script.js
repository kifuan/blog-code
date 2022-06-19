const interval = {
    _active: new Set(),
    _id: 0,

    set(callback, delay) {
        const id = this._id++
        this._active.add(id)

        const handler = () => {
            if (!this._active.has(id)) {
                return
            }
            callback()
            setTimeout(handler, delay)
        }
        setTimeout(handler, delay)
        return id
    },

    clear(id) {
        this._active.delete(id)
    }
}

let count = 0
const id = interval.set(() => {
    count++
    console.log(`count is ${count}`)
    if (count === 5) {
        interval.clear(id)
    }
}, 500)

