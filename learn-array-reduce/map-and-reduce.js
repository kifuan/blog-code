const Colors = ['Red', 'White', 'Yellow']
    .map(item => ({ [item]: item }))
    .reduce((pre, cur) => ({ ...pre, ...cur }))

console.log(Colors)
// { Red: 'Red', White: 'White', Yellow: 'Yellow' }