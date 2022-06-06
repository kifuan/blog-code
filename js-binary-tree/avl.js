function node(val, left, right) {
    return { val, left, right }
}

function height(root) {
    if (!root) {
        return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
}

function factor(root) {
    if (!root) {
        return 0
    }
    return height(root.left) - height(root.right)
}

function rotateWithLeftChild(oldRoot) {
    const newRoot = oldRoot.left
    oldRoot.left = newRoot.right
    newRoot.right = oldRoot
    return newRoot
}

function rotateWithRightChild(oldRoot) {
    const newRoot = oldRoot.right
    oldRoot.right = newRoot.left
    newRoot.left = oldRoot
    return newRoot
}

function doubleWithLeftChild(oldRoot) {
    oldRoot.left = rotateWithRightChild(oldRoot.left)
    return rotateWithLeftChild(oldRoot)
}

function doubleWithRightChild(oldRoot) {
    oldRoot.right = rotateWithLeftChild(oldRoot.right)
    return rotateWithRightChild(oldRoot)
}

function balance(root) {
    if (!root) {
        return root
    }

    if (factor(root) > 1) {
        // left
        if (factor(root.left) < 0) {
            return doubleWithLeftChild(root)
        } else {
            return rotateWithLeftChild(root)
        }
    } else if (factor(root) < -1) {
        // right
        if (factor(root.right) > 0) {
            return doubleWithRightChild(root)
        } else {
            return rotateWithRightChild(root)
        }
    }

    return root
}

function insert(root, val) {
    if (!root) {
        return node(val)
    }
    if (val < root.val) {
        root.left = insert(root.left, val)
    } else if (val > root.val) {
        root.right = insert(root.right, val)
    }
    return balance(root)
}

function remove(root, val) {
    if (!root) {
        return root
    }
    if (val < root.val) {
        root.left = remove(root.left, val)
    } else if (val > root.val) {
        root.right = remove(root.right, val)
    } else if (root.left && root.right) {
        // Finds minimum value
        let node = root.right
        while (node.left) {
            node = node.left
        }
        root.val = node.val
        root.right = remove(root.right, root.val)
    } else {
        root = root.left || root.right
    }
    return balance(root)
}

function contains(root, val) {
    if (!root) {
        return false
    }

    if (val < root.val) {
        return contains(root.left, val)
    } else if (val > root.val) {
        return contains(root.right, val)
    }
    
    return true
}
