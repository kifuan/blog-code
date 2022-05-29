const Colors = ['Red', 'White', 'Yellow']
    .reduce((pre, cur) => ({ ...pre, [cur]: cur }), {})

console.log(Colors)
// { Red: 'Red', White: 'White', Yellow: 'Yellow' }