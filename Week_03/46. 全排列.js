// 重点理解回溯的写法
// 所谓回溯，就是：每层递归回来的时候，要清除该层的状态，回溯到上一层，接着再次进入该层递归。
var permute = function (nums) {
  const len = nums.length
  const target = []
  const used = {}
  const dfs = (path) => {
    if (path.length === len) {
      target.push(path.slice())
      return
    }
    for (let i = 0; i < len; i++) {
      const curr = nums[i]
      if (used[curr]) continue
      path.push(curr)
      used[curr] = true
      dfs(path)
      path.pop()
      used[curr] = false
    }
  }
  dfs([])
  return target
};