function isPowerOf2(x) {
  return (x & (x - 1)) === 0
}

console.log(isPowerOf2(8))
