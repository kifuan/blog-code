function createNode(val) {
    return { val, left: undefined, right: undefined }
}

function insert(node, val) {
    if (!node) {
        return createNode(val)
    }
    if (val < node.val) {
        node.left = insert(node.left, val)
    } else if (val > node.val) {
        node.right = insert(node.right, val)
    }

    return node
}

function remove(node, val) {
    if (!node) {
        return node
    }
    if (val < node.val) {
        node.left = remove(node.left, val)
    } else if (val > node.val) {
        node.right = remove(node.right, val)
    } else if (node.left && node.right) {
        // Find minimum value
        let min = node.right
        while (min.left) {
            min = min.left
        }
        node.val = min.val
        node.right = remove(node.right, node.val)
    } else {
        node = node.left || node.right
    }
    return node
}

function contains(node, val) {
    if (!node) {
        return false
    }

    if (val < node.val) {
        return contains(node.left, val)
    } else if (val > node.val) {
        return contains(node.right, val)
    }
    
    return true
}
