// 1.暴力（一）
// 自己实现数组移动元素。最慢
var rotate = function (nums, k) {
  let len = nums.length
  if (len === 0) return
  let count = k
  while (count > 0) {
    let prev = nums[len - 1]
    for (let i = 0; i < len; i++) {
      let tmp = nums[i]
      nums[i] = prev
      prev = tmp
    }
    count--
  }
}
// 2. 暴力（二）
// 借用js array unshift
// 把后边k个元素依次添加到数组前边，最后删除最后k个元素。比上一种暴力方法要快
var rotate = function (nums, k) {
  let len = nums.length
  if (len === 0) return
  let end = 0
  let count = k
  while (count > 0) {
    end++
    nums.unshift(nums[nums.length - end])
    count--
  }
  nums.splice(nums.length - k, k)
  return nums
}

// 3.反转
// 初始 [1, 2, 3, 4, 5, 6, 7]  k = 3，目标[5, 6, 7, 1, 2, 3, 4]
// 全部反转一次，得到 [7, 6, 5, 4, 3, 2, 1]
// 前边k个反转一次，得到 [5, 6, 7, 4, 3, 2, 1]
// 后边len - k个再反转依次，得到 [5, 6, 7, 1, 2, 3, 4]

// 以前都是直接用reverse() 反转数组， 这次是自己写， 刚开始走入了一个误区：
// 总想着找到a[0] 跟a[len - 1] 的关系， 这样在反转中间段的子数组时候， 不好处理对应关系。 
// 其实不必寻找对应关系， 直接 start++ end-- 就行了。

var rotate = function (nums, k) {
  const len = nums.length
  if (len === 0) return
  k = k % len
  nums.reverse()
  const myReverse = (nums, start, end) => {
    while (start < end) {
      let tmp = nums[start]
      nums[start] = nums[end]
      nums[end] = tmp
      start++
      end--
    }
  }
  myReverse(nums, 0, k - 1)
  myReverse(nums, k, len - 1)
}