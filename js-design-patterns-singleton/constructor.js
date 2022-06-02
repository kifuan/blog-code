const data = []

class Singleton {
    static instance = undefined

    constructor() {
        data.push(this)
        if (Singleton.instance === undefined) {
            Singleton.instance = this
        }
        return Singleton.instance
    }
}

const obj1 = new Singleton()
const obj2 = new Singleton()

console.log(obj1 === obj2)
// true

console.log(data[0] === data[1])
// false