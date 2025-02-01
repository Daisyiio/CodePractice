function RandomColor(){
    return '#' + Math.random().toString(16).substring(2,8).padEnd(6,'0')
}



// 随机生成一个0-1的数 转为16进制截取0.后面的数至第八位 也就是截取6位数 不够就用0补充到6位数   添加井号
console.log(RandomColor())