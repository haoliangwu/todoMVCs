// http://www.qlcoder.com/task/7566

const goods = [509, 838, 924, 650, 604, 793, 564, 651, 697, 649, 747, 787, 701, 605, 644]
// const goods = [2, 3, 4, 5]
let weight = 5000
// let weight = 10

function count (dataList, max) {
  if (dataList.length === 1) return dataList[0] > max ? 0 : dataList[0]

  const good = dataList.pop()
  const dataListCopy = dataList.concat([])
  let ifTake
  let ifDontTake

  if (max >= good) {
    ifTake = good + count(dataList, max - good)
  }

  ifDontTake = count(dataListCopy, max)

  return ifTake > ifDontTake ? ifTake : ifDontTake
}

// console.log(count(goods.concat([]), weight))

let currentGood = 0

const _goods = goods.concat([])
const results = []

for (let i = 1; i <= _goods.length; i++) {
  // last time
  if (i === _goods.length) {
    if (goods[0] <= weight) {
      results.unshift(_goods.indexOf(goods[0]) + 1)
    }
    break
  }

  currentGood = goods[goods.length - 1]

  const previous = count(goods.concat([]), weight)
  const next = count(goods.concat([]).slice(0, goods.length - 1), weight - currentGood) + currentGood

  if (previous === next) {
    weight -= currentGood
    results.unshift(_goods.indexOf(currentGood) + 1)
  }

  goods.pop()
}

console.log(results.join('-'))
// function search (dataList, max) {
//   let sum = 0
//   while (dataList.length >= 0 && max >= 0){
//     time++
//     if (time > 100) return

//     const arg1 = dataList.concat([])
//     const arg2 = dataList.concat([])

//     const last = arg2.pop()

//     if (count(arg1, max) === count(arg2, max - last) + last) {
//       sum += last
//       console.log('index: %s, weight: %s', last, last)
//       max -= last
//     }

//     return sum
//   }
// // summer = 0
// //   while(i>=0 and j>=0):
// //       if(solv(i, j) == solv(i-1, j-conduct[i])+conduct[i]):
// //           summer += conduct[i]
// //           print("index:"+str(i+1)+"  weight:"+str(conduct[i]))
// //           j -= conduct[i]
// //       i -= 1
// }

// console.info(search(goods, weight))
