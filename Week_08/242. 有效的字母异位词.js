var isAnagram = function(s, t) {
  let sLen = s.length
  let tLen = t.length
  if (sLen !== tLen) return false
  const map = new Map()
  while (sLen > 0) {
    const str = s[--sLen]
    if (map.has(str)) {
      map.set(str, map.get(str) + 1)
    } else {
      map.set(str, 1)
    }
  }
  while (tLen) {
    const str = t[--tLen]
    if (map.has(str)) map.set(str, map.get(str) - 1)
  }
  return Array.from(map.values()).every((item) => item === 0)
};