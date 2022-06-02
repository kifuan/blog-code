class Singleton {
    static instance = undefined

    static getInstance() {
        if (this.instance === undefined) {
            this.instance = new Singleton()
        }
        return this.instance
    }
}

const obj1 = Singleton.getInstance()
const obj2 = Singleton.getInstance()

console.log(obj1 === obj2)
// true
