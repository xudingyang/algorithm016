// 这题不知道怎么说。感觉更多偏向技巧和找规律，多做多练吧
var maxProfit = function (prices) {
  let sum = 0
  for (let i = 1, len = prices.length; i < len; i++) {
    const num = prices[i] - prices[i - 1]
    if (num > 0) {
      sum += num
    }
  }
  return sum
};