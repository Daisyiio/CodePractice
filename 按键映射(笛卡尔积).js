/**
 * 根据数字按键，得到所有字母排列组合
 * @param {string} digits 数字按键 例如'23'
 * @return {string[]} 所有可能的字母排列组合
 */

function keyboardMap(digits) {
  function _compose(str1, str2) {
    if (str1.length === 0) return str2.split('') // 如果str1为空，则直接返回str2
    if (str2.length === 0) return str1.split('') // 如果str2为空，则直接返回str1
    let result = []
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        result.push(str1[i] + str2[j])
      }
    }
    return result
  }
  const map = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let result = digits
    .split('')
    .map((item) => map[item])
    .reduce(_compose, [])
  return result
}




//回溯算法
function keyboardMap(digits) {
  if (!digits || digits.length === 0) return [];
  
  const digitToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  
  const result = [];
  
  function backtrack(index, currentCombination) {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }
    
    const currentDigit = digits[index];
    const letters = digitToLetters[currentDigit];
    
    for (let letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }
  
  backtrack(0, '');
  return result;
}

console.log(keyboardMap('234567'))

// 小规模输入：方法1更好,适合快速实现和阅读。

// 大规模输入：回溯算法性能更好，适合处理更复杂的场景。

// 如果你的输入规模较小（例如 '23' 或 '234'），你的方法是一个不错的选择；但如果输入规模较大（例如 '234567' 或更多），建议使用回溯算法。