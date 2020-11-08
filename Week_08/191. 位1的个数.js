// 感觉js有些不好处理这个。用投机取巧的方式。。。。
var hammingWeight = function(n) {
  return n.toString(2).replace(/0/g, '').length
};