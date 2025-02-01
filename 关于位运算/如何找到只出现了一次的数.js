const arr = [1, 3, 1, 2, 2, 7, 3, 6, 7]

let res = {}
for (let i = 0; i < arr.length; i++) {
  res[arr[i]] = res[arr[i]] ? res[arr[i]] + 1 : 1
}
console.log(res)
const res2 = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})
console.log(res2)

// 找到只出现一次的数
const result = []
for (let num in res) {
  if (res[num] === 1) {
    result.push(Number(num)) // 将键转换为数字
  }
}
console.log(result)

//使用位运算（适用于只有一个唯一数的情况）
function uniqueNumber(nums) {
  //   let result = 0
  //   for (let num of arr) {
  //     result ^= num // 异或运算
  //   }
  return nums.reduce((a, b) => a ^ b)
}

console.log(uniqueNumber(arr))
