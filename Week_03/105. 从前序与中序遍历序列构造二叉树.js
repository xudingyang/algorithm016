// 先找到根，然后找到左、右。主要就是“找关系”！

// 递归，没有任何优化
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  const root = new TreeNode(preorder[0])
  const rootIndex = inorder.indexOf(preorder[0])
  const leftPreorder = preorder.slice(1, rootIndex + 1)
  const rightPreorder = preorder.slice(rootIndex + 1)
  const leftInorder = inorder.slice(0, rootIndex)
  const rightInorder = inorder.slice(rootIndex + 1)
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
};

// 优化：把切割数组改为直接取下标
// 我们的目标不是切割数组，而是获得根元素在数组中的位置，然后取值。
// 从这点来看，只需要知道下标即可，不需要反复切割数组
// 而且，我们切割数组的范围也是根据下标来的，所以知道了下标直接取值就行了，不必切割数组
// 另外，每层递归里面，都用到了indexOf()，这里可以用hash优化
var buildTree = function (preorder, inorder) {
  const map = new Map()
  inorder.forEach((el, index) => {
    map.set(el, index)
  })
  const fn = (pStart, pEnd, iStart, iEnd) => {
    if (pStart > pEnd) return null
    const rootVal = preorder[pStart]
    const root = new TreeNode(rootVal)
    const rootIndex = map.get(rootVal) // inorder.indexOf(rootVal)
    const leftNum = rootIndex - iStart
    root.left = fn(pStart + 1, pStart + leftNum, iStart, rootIndex - 1)
    root.right = fn(pStart + leftNum + 1, pEnd, rootIndex + 1, iEnd)
    return root
  }
  return fn(0, preorder.length - 1, 0, inorder.length - 1)
};