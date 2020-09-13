// 1.暴力解法
//   1）用一个标记tag保存“当前最新的不同的元素”
//   2）从尾部开始遍历数组，遇到重复的元素删除之；遇到不同的元素，赋给tag
//   说明：js的数组可以动态修改，如果从前边开始遍历，删除元素后，需要修改当前索引i=i-1，容易出错，所以从后边开始遍历，避免出错。
//   缺点：多次调用js array splice()函数，效率低。
var removeDuplicates1 = function (nums) {
  const len = nums.length
  let tag = nums[len]
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === tag) {
      nums.splice(i, 1)
    } else {
      tag = nums[i]
    }
  }
  return nums.length
}

// 2. 用一个指针标记最新不同元素
//   指针pointer指向第0个元素
//   从头开始遍历数组
//   如果元素与nums[pointer]相等，什么也不做；如果不等，则 pointer += 1，nums[pointer] =nums[i]
//   这样写真的啰嗦，简单死了，直接看代码吧
// 最后，pointer+1即为目标数组的长度
// 注意：题目强调“不需要考虑数组中超出新长度后面的元素”，所以不用调用splice函数，只需计算出pointer+1的值即可,又省一点时间
// 
var removeDuplicates2 = function (nums) {
  let pointer = 0
  let len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[pointer]) {
      nums[++pointer] = nums[i]
    }
  }
  return pointer + 1
}