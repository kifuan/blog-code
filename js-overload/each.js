const users = {
    values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
}

function addMethod(obj, name, func) {
    const old = obj[name]
    obj[name] = function() {
        if (arguments.length === func.length) {
            return func.apply(this, arguments)
        } else if (typeof old === 'function') {
            return old.apply(this, arguments)
        }
    }
}

addMethod(users, 'find', function() {
    return this.values
})

addMethod(users, 'find', function(firstName) {
    return this.values.filter(name => name.startsWith(firstName))
})

addMethod(users, 'find', function(firstName, lastName) {
    return this.find(firstName).filter(name => name.endsWith(lastName))
})

console.log(users.find())
// [ 'Dean Edwards', 'Alex Russell', 'Dean Tom' ]

console.log(users.find('Dean'))
// [ 'Dean Edwards', 'Dean Tom' ]

console.log(users.find('Dean', 'Tom'))
// [ 'Dean Tom' ]

console.log(users.find('Dean', 'Tom', 'A'))
// undefined