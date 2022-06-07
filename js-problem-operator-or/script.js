function createNode(val) {
    return { val, depth: 0, next: undefined }
}

function depth(node) {
    // wrong:   node?.depth || -1
    // correct: node?.depth ?? -1
    return node ? node.depth : -1
}

function insert(node, val) {
    if (!node) {
        return createNode(val)
    }

    node.next = insert(node.next, val)
    node.depth = depth(node.next) + 1

    return node
}

const root = [3, 7, 4].reduce((root, val) => {
    return insert(root, val)
}, undefined)

console.log(root)
