var inorderTraversal = function (root) {
  const target = []
  const traversal = (node) => {
    if (node !== null) {
      traversal(node.left)
      target.push(node.val)
      traversal(node.right)
    }
  }
  traversal(root)
  return target
};