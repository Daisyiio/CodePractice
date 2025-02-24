const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  #state = PENDING
  #value = null
  #handler = undefined
  #handlers = []
  constructor(exceutor) {
    const resolve = (val) => {
      this.setState(val, FULFILLED)
    }
    const reject = (reason) => {
      this.setState(reason, REJECTED)
    }
    try {
      exceutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      //pending
      try {
        const cb = this.#state === FULFILLED ? onFulfilled : onRejected
        const res = typeof cb === 'function' ? cb(this.#value) : this.#value
        resolve(res)
      } catch (error) {
        reject(error)
      }

      this.#runTask()
    })
  }
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
  #runTask() {
    if (this.#state !== PENDING) {
      this.#handlers.forEach((cb) => cb())
      this.#handlers = []
    }
  }
  setState(state, value) {
    if (this.#state !== PENDING) return
    this.#state = state
    this.#value = value
    this.#runTask()
  }
}

const p = new MyPromise((resolve, reject) => {
  resolve('success')
})
