// 迭代
var levelOrder = function (root) {
  if (root === null) return []
  const target = []
  const queue = [root]
  while (queue.length) {
    let size = queue.length
    const arr = []
    while (size > 0) {
      const node = queue.shift()
      arr.push(node.val)
      queue.push(...node.children)
      size--
    }
    target.push(arr)
  }
  return target
};

// 递归 （慢）
var levelOrder = function (root) {
  if (root === null) return []
  const target = []
  const dfs = (node, level) => {
    if (node === null) return
    if (target[level]) {
      target[level].push(node.val)
    } else {
      target[level] = [node.val]
    }
    node.children.forEach(item => {
      dfs(item, level + 1)
    })
  }
  dfs(root, 0)
  return target
};