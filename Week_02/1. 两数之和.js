// 暴力(最慢)  hash(次慢)   双指针(最快)

// 1 暴力 （最慢）   O(n^2)  O(1)
var twoSum = function (nums, target) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
};

// 2 hash （第二慢）  O(n)   O(n)
var twoSum = function (nums, target) {
  const len = nums.length
  const map = new Map()
  nums.forEach((item, index) => {
    if (map.get(item)) {
      map.get(item).push(index)
    } else {
      map.set(item, [index])
    }
  })
  for (let i = 0; i < len; i++) {
    const num = target - nums[i]
    const val = map.get(num)
    if (val) {
      if (val.length > 1) {
        return [val[0], val[1]]
      } else if (val[0] !== i) {
        return [i, val[0]]
      }
    }
  }
};

// 3 双指针 （最快） 
var twoSum = function (nums, target) {
  const arr = nums.concat().sort((a, b) => a - b)
  const len = nums.length
  let left = 0
  let right = len - 1
  while (left < right) {
    const curr = arr[left] + arr[right]
    if (curr < target) {
      left++
    } else if (curr > target) {
      right--
    } else {
      return [nums.indexOf(arr[left]), nums.lastIndexOf(arr[right])]
    }
  }
};