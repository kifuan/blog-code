class EventBus {
    callbacks = {}

    on(event, callback) {
        const callbacks = this.callbacks[event] ||= []
        callbacks.push(callback)
        return this
    }

    once(event, callback) {
        const actual = (...args) => {
            callback(...args)
            this.remove(event, actual)
        }
        this.on(event, actual)        
        return this
    }

    emit(event, ...args) {
        this.callbacks[event]?.forEach(callback => {
            callback(...args)
        })
        return this
    }

    remove(event, callback = undefined) {
        if (callback) {
            const index = this.callbacks[event].indexOf(callback)
            index !== -1 && delete this.callbacks[event][index]
        } else {
            delete this.callbacks[event]
        }
        return this
    }
}

const bus = new EventBus()

bus.on('foo', () => {
    console.log('foo 1')
}).on('foo', () => {
    console.log('foo 2')
}).emit('foo')
// foo 1
// foo 2

bus.remove('foo')
    .emit('foo')
// it will do nothing


bus.on('bar', n => {
    console.log('bar:', n)
}).once('bar', n => {
    console.log('bar once:', n)
}).emit('bar', 3)
// bar: 3
// bar once: 3

bus.emit('bar', 3)
// bar: 3
