// 1 暴力写法，先合并，再排序，这跟合并两个乱序数组没区别。
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
}

// 2 “归并排序”的写法
// 这种写法比上边“暴力”写法耗时差不多、甚至更久。可能是上边写法调用了api，js引擎内部优化了
var merge = function (nums1, m, nums2, n) {
  const nums1_copy = nums1.slice(0, m)
  let index_copy = 0 // nums1_copy的索引
  let index1 = 0 // nums1的索引
  let index2 = 0 // nums2的索引
  while (index_copy < m && index2 < n) {
    if (nums1_copy[index_copy] <= nums2[index2]) {
      nums1[index1++] = nums1_copy[index_copy++]
    } else {
      nums1[index1++] = nums2[index2++]
    }
  }
  // nums2有多的
  if (index_copy >= m - 1 && index2 < n) {
    while (index2 < n) {
      nums1[index1++] = nums2[index2++]
    }
  } else if (index_copy < m && index2 >= n - 1) {
    while (index_copy < m) {
      nums1[index1++] = nums1_copy[index_copy++]
    }
  }
  // 去掉多余的0
  nums1.splice(m + n, nums1.length)
}

// 3 从后边添加
//    1). 时间O(m + m)
//    2). 空间O(1)
//    3). 因为nums1已经有足够大的空间， 所以不需要另外开辟新数组了。
//    4). 归并排序需要开辟新数组。