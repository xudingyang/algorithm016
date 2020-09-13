// 三种解法都是没有看题解就想出来了，表扬一下！！

// 1 暴力
var moveZeroes = function (nums) {
  // 首先把0删掉
  const len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
    }
  }
  // 然后在末尾补0
  for (let j = 0, jLen = len - nums.length; j < jLen; j++) {
    nums.push(0)
  }
}

// 2 标记指针。(时间没有快多少，100ms变成了96ms，但是别人同样的代码却很快，可能因为没开会员吧)
// 类似"26. 删除排序数组中的重复项"，用一个指针标记重复元素，这里的重复元素就是0
// 遇到重复元素，什么也不做；若不是重复元素，pointer++，并且赋值nums[i]。
// 最终，pointer+1就是非0元素的个数。剩余len - 1 - pointer个元素全部赋值为0
var moveZeroes = function (nums) {
  let pointer = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[pointer++] = nums[i]
    }
  }
  for (let j = pointer; j < len; j++) {
    nums[j] = 0
  }
}

// 3 标记指针。但不是在末尾补零了，而是直接交换，少了一小段循环
var moveZeroes = function (nums) {
  const len = nums.length
  let pointer = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      if (i > pointer) {
        nums[pointer] = nums[i]
        nums[i] = 0
      }
      pointer++
    }
  }
}