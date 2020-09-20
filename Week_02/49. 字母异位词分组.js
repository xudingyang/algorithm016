// hash
var groupAnagrams = function (strs) {
  const map = new Map()
  strs.forEach((item, index) => {
    const s = item.split('').sort().join('')
    if (map.get(s)) {
      map.get(s).push(item)
    } else {
      map.set(s, [item])
    }
  })
  return Array.from(map.values())
};