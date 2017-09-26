// 参考: https://zhuanlan.zhihu.com/p/21834559

/*
主要就是利用js的callback来实现一个延迟绑定，
因此then函数是最核心的部分，其他的附加功能均可以以then为媒介实现，
比如all，原理就是为参数数组中的每个promise绑定一个callback，在这个callback来验证是否所有的promise都执行完毕，
如果执行完1个，则将提前声明的count减1并将结果放入result数组，直到count为０时,使用resolve返回result数组。
*/

function MyPromise (executor) {
  let self = this
  self.status = 'pending' // Promise当前的状态
  self.data = undefined // Promise的值
  self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = [] // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve (value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value

      for (let i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject (reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason

      for (let i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function (onRes, onRej) {
  let self = this

  onRes = typeof onRes === 'function' ? onRes : function (value) { return value }
  onRej = typeof onRes === 'function' ? onRes : function (reason) { return reason }

  switch (self.status) {
    case 'resolved':
      return new MyPromise(function (resolve, reject) {
        try {
          let x = onRes(self.data)
          if (x instanceof MyPromise) x.then(resolve, reject)
          resolve(x)
        } catch (error) {
          reject(error)
        }
      })
    case 'rejected':
      return new MyPromise(function (resolve, reject) {
        try {
          let x = onRej(self.data)
          if (x instanceof MyPromise) x.then(resolve, reject)
          reject(x)
        } catch (error) {
          reject(error)
        }
      })
    case 'pending':
      return new MyPromise(function (resolve, reject) {
        self.onResolvedCallback.push(function (value) {
          try {
            let x = onRes(self.data)
            if (x instanceof MyPromise) x.then(resolve, reject)
            resolve(x)
          } catch (error) {
            reject(error)
          }
        })
        self.onRejectedCallback.push(function (reason) {
          try {
            let x = onRej(self.data)
            if (x instanceof MyPromise) x.then(resolve, reject)
            reject(x)
          } catch (error) {
            reject(error)
          }
        })
      })
  }
}

MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

MyPromise.prototype.all = function (promises) {
  return new MyPromise(function (resolve, reject) {
    let i = 0
    let result = []
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

// test code

let p1 = new MyPromise((res, rej) => {
  setTimeout(function () {
    console.log(1)
    res(3)
  }, 1000)
})

let p2 = new MyPromise((res, rej) => {
  setTimeout(function () {
    console.log(1)
    res(4)
  }, 3000)
})

MyPromise.prototype.all([p1, p2]).then((res) => {
  console.log(res)
})
