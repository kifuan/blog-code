const compose = (f, g) => x => f(g(x))

const prop = key => obj => obj[key]

const propIs = value => key => obj => prop(key)(obj) === value

const map = mapper => array => array.map(mapper)

const filter = predicate => array => array.filter(predicate)

const getAdminEmails = compose(
    map(prop('email')),
    filter(propIs('admin')('role'))
)

const allUsers = [
    { role: 'admin', email: 'a@b.com' }, 
    { role: 'user', email: 'c@d.com' },
    { role: 'admin', email: 'e@f.com' }
]

console.log(getAdminEmails(allUsers))
// [ 'a@b.com', 'e@f.com' ]