Promise.all([1,2,3,4]).then((datas)=>{
  console.log(datas)
})

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 如果输入不是数组，直接 reject
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Arguments must be an array'));
    }

    const results = []; // 存储每个 Promise 的结果
    let completedCount = 0; // 记录已完成的 Promise 数量

    // 遍历每个 Promise
    promises.forEach((promise, index) => {
      // 确保当前项是一个 Promise
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result; // 将结果存入对应的位置
          completedCount++;

          // 如果所有 Promise 都完成了，resolve 结果数组
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // 如果任何一个 Promise 失败，直接 reject
          reject(error);
        });
    });

    // 如果传入的数组为空，直接 resolve 空数组
    if (promises.length === 0) {
      resolve(results);
    }
  });
}


myPromiseAll([1,2,3]).then(datas=>{
  console.log(datas)
})




