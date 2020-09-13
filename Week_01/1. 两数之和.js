// 1 暴力
// 题目没有说有多少个元素，所以我特意增加了判断，但是把测试用例改成空数组后，我的答案有“正确输出”，系统的答案是无输出。
// 以后还是少考虑这种情况了，浪费了大量时间来调试，破系统的答案竟然是什么也不输出。
var twoSum1 = function (nums, target) {
  const len = nums.length
  if (len >= 2) {
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] + nums[j] === target && i !== j) {
          return [i, j]
        }
      }
    }
  } else {
    return []
  }
}

// 2.双指针
// 需要注意的是，双指针适用于有序数组
var twoSum = function (nums, target) {
  // 双指针要先排序
  const arr = nums.map(el => el).sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--
    } else if (arr[left] + arr[right] < target) {
      left++
    } else {
      return [nums.indexOf(arr[left]), nums.lastIndexOf(arr[right])]
    }
  }
}