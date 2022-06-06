function node(val, left, right) {
    return { val, left, right }
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

    return root
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
    return root
}
