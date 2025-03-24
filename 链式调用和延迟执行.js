// arrange('william').wait(5).do('commit').waitFirst(3).excute()
/**
 * 预期输出：
 * (等待 3 秒)
 * William is notified
 * (等待 5 秒)
 * Start to commit
 */

function arrange(name) {
  let tasks = []
  tasks.push(() => {
    console.log(`${name} is notified`)
  })
  function wait(second) {
    tasks.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, second * 1000)
        })
    )
    return this
  }
  function doSomething(action) {
    tasks.push(() => {
      console.log(`start to ${action}`)
    })
    return this
  }
  function waitFirst(second) {
    tasks.unshift(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, second * 1000)
        })
    )
    return this
  }
  function excute() {
    ;(async () => {
      for (let task of tasks) {
        await task()
      }
    })()
    return this
  }
  return {
    wait,
    do: doSomething,
    waitFirst,
    excute,
  }
}

// 测试
arrange('William').wait(5).do('commit').waitFirst(3).excute()
