// 这题很有意思。以前碰到类似的都不知道怎么做，现在发现好简单，加油
var numIslands = function (grid) {
  const len = grid.length
  if (len === 0) return 0
  const colLen = grid[0].length
  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= len || col >= colLen || grid[row][col] === '0') return
    grid[row][col] = '0'
    dfs(row + 1, col)
    dfs(row, col + 1)
    dfs(row - 1, col)
    dfs(row, col - 1)
  }
  let count = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0, jLen = colLen; j < jLen; j++) {
      if (grid[i][j] == '1') {
        dfs(i, j)
        count++
      }
    }
  }
  return count
};