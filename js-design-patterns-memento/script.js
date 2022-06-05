class Staff {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    raiseSalary(salary) {
        this.salary += salary
    }

    store() {
        const memento = JSON.stringify(this)
        return memento
    }

    restore(memento) {
        Object.assign(this, JSON.parse(memento))
    }
}

class StaffCareTaker {
    mementos = {}

    set(key, memento) {
        this.mementos[key] = memento
    }

    get(key) {
        return this.mementos[key]
    }
}

const careTaker = new StaffCareTaker()
const staff = new Staff('Bob', 12500)

careTaker.set(1, staff.store())

staff.raiseSalary(5000)
console.log(staff.salary)
// 17500

staff.restore(careTaker.get(1))
console.log(staff.salary)
// 12500