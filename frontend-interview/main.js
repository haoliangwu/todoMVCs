import $ from 'jquery'

/* question 1
实现一个简易递增器，使其可以满足链式调用的需求
question1.add(1).add(2).add(3).add(4)
quesiton1.result => 10
*/
export const question1 = new LinkFn()

function LinkFn () {
  this.result = 0
}

LinkFn.prototype.add = function (number) {
  // TODO
}

/* question 2
实现一个数组去重函数
question2([1,1,2,2,3,3]) => [1,2,3]
*/

export const question2 = function (arr) {
  // TODO
  return arr
}

/* question 3
请打开main.css文件
*/

/* question 4
实现1 当点击页面的任何地方，可弹出 document 字符串
实现2 当点击灰色正方形时，只弹出 trigger 字符串
实现3 当点击灰色正方形时，先弹出 document 字符串, 再弹出 trigger 字符串
*/

// 原生 TODO

// jquery TODO

/* question 5
将以下函数改造成，既支持 Promise类型 参数又支持 基本数据类型 的函数
*/

export const question5 = function (resolve) {
  const promise = new Promise()

  window.alert(resolve)
}
