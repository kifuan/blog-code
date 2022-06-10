const set = new WeakSet()

let mike = { name: 'Mike', age: 17 }
let john = { name: 'John', age: 18 }

set.add(john).add(mike)

john = undefined

set.add(1)
// TypeError: Invalid value used in weak set
