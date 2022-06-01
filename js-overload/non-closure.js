const users = {
    values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
}

function overload(...funcs) {
    return function() {
        return funcs.find(f => f.length === arguments.length)
            ?.apply(this, arguments)
    }
}

function findAll() {
    return this.values
}

function findFirstName(firstName) {
    return this.values.filter(name => name.startsWith(firstName))
}

function findFullName(firstName, lastName) {
    return this.find(firstName).filter(name => name.endsWith(lastName))
}

users.find = overload(findAll, findFirstName, findFullName)

console.log(users.find())
// [ 'Dean Edwards', 'Alex Russell', 'Dean Tom' ]

console.log(users.find('Dean'))
// [ 'Dean Edwards', 'Dean Tom' ]

console.log(users.find('Dean', 'Tom'))
// [ 'Dean Tom' ]

console.log(users.find('Dean', 'Tom', 'A'))
// undefined
