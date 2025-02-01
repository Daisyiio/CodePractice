var arr = []

arr[1] = 1
arr['1'] = 3
console.log(arr[1]) //3

var a = {}
b = { key: 'b' }
c = { key: 'c' }

a[b] = 'b'
a[c] = 'c'

//a['[object Object]']

console.log(a[b]) //c
console.log(a[c]) //c
