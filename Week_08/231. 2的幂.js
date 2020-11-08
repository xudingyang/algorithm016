// 数学问题都差不多的，换着花样加减乘除就对了，关键是找到数学规律
var isPowerOfTwo = function(n) {
  if (n === 0) return false
  while (n % 2 === 0) n /= 2
  return n === 1
};