function getAdminEmails(users) {
    const emails = []
    for (const user of users) {
        if (user.role === 'admin') {
            emails.push(user.email)
        }
    }
    return emails
}

const allUsers = [
    { role: 'admin', email: 'a@b.com' }, 
    { role: 'user', email: 'c@d.com' },
    { role: 'admin', email: 'e@f.com' }
]

console.log(getAdminEmails(allUsers))
// [ 'a@b.com', 'e@f.com' ]