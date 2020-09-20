// hash
var topKFrequent = function (nums, k) {
  const map = {}
  nums.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1
    }
  })
  const arr = Object.entries(map)
  arr.sort((a, b) => {
    return b[1] - a[1]
  })
  return arr.slice(0, k).map(el => el[0])
};