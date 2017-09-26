const selectedArr = [
  [0, 0], [0, 1], [1, 1]
]

const isDataRect = (arr) => {
  let flag = true
  let count = 0
  const act = arr.length
  let exp = 0

  while (count < act) {
    let ori = arr[count]
    let next = arr[++count]

    if (!next) {
      flag = act === exp
      break
    }

    const [x1, y1] = ori
    const [x2, y2] = next

    exp = Math.max((Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1), exp)

    if (exp > act) {
      flag = false
      break
    }
  }

  return flag
}

console.log(isDataRect(selectedArr))
