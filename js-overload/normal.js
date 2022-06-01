const users = {
    values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
}

users.find = function() {
    switch (arguments.length) {
        case 0:
            return this.values
        case 1:
            return this.values.filter(name => name.startsWith(arguments[0]))
        case 2:
            return this.values.filter(name => name.startsWith(arguments[0])
                && name.endsWith(arguments[1]))
    }
}

console.log(users.find())
// [ 'Dean Edwards', 'Alex Russell', 'Dean Tom' ]

console.log(users.find('Dean'))
// [ 'Dean Edwards', 'Dean Tom' ]

console.log(users.find('Dean', 'Tom'))
// [ 'Dean Tom' ]

console.log(users.find('Dean', 'Tom', 'A'))
// undefined
