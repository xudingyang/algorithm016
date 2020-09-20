// 迭代
var preorder = function (root) {
  if (root === null) return []
  const target = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    target.push(node.val)
    stack.push(...node.children.reverse())
  }
  return target
};

// 递归
var preorder = function (root) {
  const target = []
  const dfs = (node) => {
    if (node === null) return
    target.push(node.val)
    node.children.forEach(item => {
      dfs(item)
    })
  }
  dfs(root)
  return target
};