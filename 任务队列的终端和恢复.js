/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间终端
 * @param {...Function} tasks 任务列表,每个任务无参、异步
 *
 */

function processTasks(...tasks) {
  let isRunning = false
  const res = []
  let i = 0
  return {
    start() {
      return new Promise(async (resolve, reject) => {
        if (isRunning) {
          return
        }
        isRunning = true
        while (i < tasks.length) {
          console.log('任务开始', i)
          res.push(await tasks[i]())
          console.log('任务结束', i)
          i++
          if (!isRunning) {
            return
          }
        }
        console.log('任务执行结束', res)
        isRunning = false
      })
    },
    pause() {
      isRunning = false
    },
  }
}
