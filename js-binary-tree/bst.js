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
        let min = root.right
        while (min.left) {
            min = min.left
        }
        root.val = min.val
        root.right = remove(root.right, root.val)
    } else {
        root = root.left || root.right
    }
    return root
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
