function createNode(val, left, right) {
    return { val, left, right }
}

function height(root) {
    if (!root) {
        return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
}

function factor(node) {
    if (!node) {
        return 0
    }
    return height(node.left) - height(node.right)
}

function rotateWithLeftChild(k1) {
    const k2 = k1.left
    k1.left = k2.right
    k2.right = k1
    return k2
}

function rotateWithRightChild(k1) {
    const k2 = k1.right
    k1.right = k2.left
    k2.left = k1
    return k2
}

function doubleWithLeftChild(k1) {
    k1.left = rotateWithRightChild(k1.left)
    return rotateWithLeftChild(k1)
}

function doubleWithRightChild(k1) {
    k1.right = rotateWithLeftChild(k1.right)
    return rotateWithRightChild(k1)
}

function balance(node) {
    if (!node) {
        return node
    }

    if (factor(node) > 1) {
        // left
        if (factor(node.left) < 0) {
            node = doubleWithLeftChild(node)
        } else {
            node = rotateWithLeftChild(node)
        }
    } else if (factor(node) < -1) {
        // right
        if (factor(node.right) > 0) {
            node = doubleWithRightChild(node)
        } else {
            node = rotateWithRightChild(node)
        }
    }
    return node
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
    return balance(node)
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
        // Finds minimum value
        let min = node.right
        while (min.left) {
            min = min.left
        }
        node.val = min.val
        node.right = remove(node.right, node.val)
    } else {
        node = node.left || node.right
    }
    return balance(node)
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
