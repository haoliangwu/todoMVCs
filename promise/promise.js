import { STATUS, isPending, isRejected, isResolved, formatExecutorFn, isPromiseType } from './helper'

export default class MyPromise {
  constructor (executor) {
    this.status = STATUS.PENDING
    this.data = null
    this.onResolvedCbs = []
    this.onRejectedCbs = []

    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)

    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }

  resolve (val) {
    if (isPending(this.status)) {
      this.status = STATUS.RESOLVED
      this.data = val

      this.onResolvedCbs.forEach(e => e(val))
    }
  }

  reject (err) {
    if (isPending(this.status)) {
      this.status = STATUS.REJECTED
      this.data = err

      this.onRejectedCbs.forEach(e => e(err))
    }
  }

  then (resolveFn, rejectFn) {
    resolveFn = formatExecutorFn(resolveFn)
    rejectFn = formatExecutorFn(rejectFn)

    switch (this.status) {
      case STATUS.RESOLVED:
        return new MyPromise((resolve, reject) => {
          try {
            const result = resolveFn(this.data)
            if (isPromiseType(result)) result.then(resolve, reject)
            resolve(result)
          } catch (err) {
            reject(err)
          }
        })
      case STATUS.REJECTED:
        return new MyPromise((resolve, reject) => {
          try {
            const result = rejectFn(this.data)
            if (isPromiseType(result)) result.then(resolve, reject)
            reject(result)
          } catch (err) {
            reject(err)
          }
        })
      case STATUS.PENDING:
        return new MyPromise((resolve, reject) => {
          this.onResolvedCbs.push(val => {
            try {
              const result = resolveFn(this.data)
              if (isPromiseType(result)) result.then(resolve, reject)
              resolve(result)
            } catch (err) {
              reject(err)
            }
          })

          this.onRejectedCbs.push(err => {
            try {
              const result = rejectFn(this.data)
              if (isPromiseType(result)) result.then(resolve, reject)
              reject(result)
            } catch (err) {
              reject(err)
            }
          })
        })
    }
  }

  catch (reject) {
    return this.then(null, reject)
  }

  all (promises) {
    return new MyPromise(function (resolve, reject) {
      let i = 0
      const result = []
      let count = promises.length

      function resolveAll (index, value) {
        result[index] = value
        if (--count === 0) {
          resolve(result)
        }
      }

      for (; i < promises.length; i++) {
        promises[i].then(resolveAll.bind(this, i), reject)
      }
    })
  }
}
