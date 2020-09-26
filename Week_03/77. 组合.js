// 要搞清楚排列组合的区别。高中知识忘记了！
var combine = function (n, k) {
  const target = []
  const dfs = (start, path) => {
    if (path.length >= k) {
      target.push(path.slice())
      return
    }
    for (let i = start; i <= n; i++) {
      path.push(i)
      dfs(i + 1, path)
      path.pop()
    }
  }
  dfs(1, [])
  return target
};