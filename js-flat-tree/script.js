const flatComments = [
    { id: 1, content: 'A', parent: -1 },
    { id: 2, content: 'B', parent: -1 },
    { id: 3, content: 'C', parent: 1 },
    { id: 4, content: 'D', parent: 3 },
    { id: 5, content: 'E', parent: 2 },
]

const treeComments = [
    {
        id: 1,
        content: 'A',
        children: [
            {
                id: 3,
                content: 'C',
                children: [{ id: 4, content: 'D', children: [] }]
            }
        ]
    },
    {
        id: 2,
        content: 'B',
        children: [{ id: 5, content: 'E', children: [] }]
    }
]

function toTree(arr) {
    const root = []

    // Copy the array, then the operations won't affect raw data.
    arr = arr.map(item => ({ ...item }))

    // Store the id property as key, the item itself as value.
    const map = arr.reduce((pre, cur) => {
        pre[cur.id] = cur
        return pre
    }, {})

    // In this way, when trying to get the children of the item
    // with -1 as id, it will get the root array.
    map[-1] = { children: root }

    arr.forEach(item => {
        /*
         * If map[item.parent].children is undefined, it will be set
         * to an empty array, then get it and store to a variable.
         * 
         * As the array is refernce type, operations on the variable
         * will affect the raw array.
         */
        const children = map[item.parent].children ||= []
        children.push(item)
    })

    return root
}

function toFlat(tree) {
    const result = []

    // This function appends the item and its children to result array.
    const append = ({ id, content, children }, parent) => {
        // Here we append a new object, then the operations on return value won't affect raw data.
        result.push({ id, content, parent })
        // Append each child to array, calling the function recursively.
        children.forEach(child => {
            append(child, id)
        })
    }

    // Iterate the tree, as it is an array.
    tree.forEach(root => {
        append(root, -1)
    })

    return result
}

console.log(toTree(flatComments))

console.log(toFlat(treeComments))