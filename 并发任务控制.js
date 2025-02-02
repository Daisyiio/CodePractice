function timeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
class SuperTask{
  
}
const superTask = new SuperTask()
function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`)
    })
}

addTask(10000, 1) //10000ms 后输出 任务1完成
addTask(5000, 2) // 5000ms 后输出任务2 完成
addTask(3000, 3) // 8000ms 后输出任务3 完成
addTask(4000, 4) //12000ms 后输出 任务4 完成
addTask(5000, 5) //15000ms 后输出  任务5 完成
























/**这部分是答案---------------------------------------------------------------------------------

class SuperTask{
  constructor(paralleCount = 2){
    this.paralleCount = paralleCount
    this.tasksList  = []
    this.runningCount = 0 

  }
  add(task){
    return  new Promise((resolve,reject)=>{
     this.tasksList.push({task,resolve,reject})
     this._run()
      })
    }
  _run(){
    while(this.runningCount <this.paralleCount && this.tasksList.length>0){
    const {task,resolve,reject} = this.tasksList.shift()
      this.runningCount++
      task().then(resolve,reject).finally(()=>{
        this.runningCount--
        this._run() 
      })
    }
  }
}
这部分是答案---------------------------------------------------------------------------------
 */

