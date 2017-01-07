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
