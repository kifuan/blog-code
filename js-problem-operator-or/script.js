function createNode(val) {
    return { val, len: 0, next: undefined }
}

function len(node) {
    // wrong:   node?.len || -1
    // correct: node?.len ?? -1
    return node ? node.len : -1
}

function insert(node, val) {
    if (!node) {
        return createNode(val)
    }

    node.next = insert(node.next, val)
    node.len = len(node.next) + 1

    return node
}

let root = createNode(4)
root = insert(root, 8)
root = insert(root, 3)

console.log(root)