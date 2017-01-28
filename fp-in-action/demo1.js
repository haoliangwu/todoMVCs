// pure function

// 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

// slice vs splice

const a = [1, 2, 3]

const b = a.slice(0, 1)

console.log(a, b)
// should be [1,2,3], [1]

const c = a.splice(0, 1)

console.log(a, c)
// should be [1,2], [1]

// advantages
// 可缓存性 由于输入与输出的一对一关系，因此更具输入值可进行相关缓存，如下
const memoize = function (f) {
  const cache = {}

  return function () {
    const index = JSON.stringify(arguments)
    cache[index] = cache[index] || f.apply(f, arguments)
    return cache[index]
  }
}

const addOne = memoize(e => {
  console.log('try to add 1')
  return e + 1
})

console.log(addOne(1))
// try to add 1
// 2

console.log(addOne(1))
// 2

// 可移植性 可以将函数序列化，使用socket进行发送
// 可测试性 易于测试，只需提供输入值与输出断言值即可测试，无需配置相关环境
// 引用透明性 同等功能的纯函数，相互可替代
// 并行性 由于纯函数不依赖于外部条件，不产生副作用，因此不会对资源具有竞争性，产生竞态条件
