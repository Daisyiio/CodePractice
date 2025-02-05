var str = 'afjhqwiourqwoijlkaczxkljmpok'


//极简
var result = str.split('').reduce((a,b)=>((a[b]++||(a[b]=1)),a),{})

console.log(result,'result')




//传统
let res=  {}
for(let i =0;i<str.length;i++){
  if(res[str[i]]){
    res[str[i]]++
  }else{
    res[str[i]] =1
  }
}


console.log(res,'res')