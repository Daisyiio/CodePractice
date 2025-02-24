function RandomColor(){
    return '#' + Math.random().toString(16).substring(2,8).padEnd(6,'0')
}



// 随机生成一个0-1的数 转为16进制截取0.后面的数至第八位 也就是截取6位数 不够就用0补充到6位数   添加井号
console.log(RandomColor())


function generateRandomUntilMultipleDecimals() {
    let count = 0;
    let decimalCounts = new Array(13).fill(0); // 初始化一个数组，用来存储1到13位小数出现的次数
    let randomNum;
    
    while (true) {
      randomNum = Math.random();
      count++;
      
      // 获取小数部分的位数
      let decimalLength = randomNum.toString().split('.')[1]?.length;
      
      // 如果小数部分的位数在1到13之间，更新对应的计数器
      if (decimalLength >= 1 && decimalLength <= 13) {
        decimalCounts[decimalLength - 1]++;
      }
  
      // 当所有位数的计数器都大于某个阈值（比如每个至少出现一次），就停止
      if (decimalCounts.every(count => count > 0)) {
        break;
      }
    }
  
    // 输出每个小数位数出现的次数
    for (let i = 0; i < decimalCounts.length; i++) {
      console.log(`出现 ${i + 1} 位小数的次数: ${decimalCounts[i]}`);
    }
    
    console.log(`生成了 ${count} 次，直到每个小数位数（从1位到13位）都至少出现一次。`);
    return randomNum;
  }
  
  let result = generateRandomUntilMultipleDecimals();
  console.log(result, '最终生成的随机数');
  