const selectedArr = [
  [4, 8],
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5]
]

// const foo = [
//   [x, x, x, 1, 1, 1, 1, 1, 1, 1],
//   [x, 1, x, 1, 1, 1, 1, 1, 1, 1],
//   [x, x, x, x, 1, x, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, x, 1]
// ]

const pow2 = x => Math.pow(x, 2)

const isDataRect = (arr) => {
  let flag = true
  let count = 0
  const act = arr.length
  let exp = 0
  let lt = [0, 0]
  let rb = [0, 0]

  while (count < act) {
    const _lt = arr[count]
    const _rb = arr[++count]

    if (!_rb) {
      flag = act === exp
      break
    }

    const [_x1, _y1] = _lt
    const [_x2, _y2] = _rb
    let [x1, y1] = lt
    let [x2, y2] = rb

    const offset = pow2(x2 - x1) + pow2(y2 - y1)
    const offsetLt = pow2(x2 - _x1) + pow2(y2 - _y1)
    const offsetRb = pow2(_x2 - x1) + pow2(_y2 - y1)

    if (offsetLt > offset) {
      x1 = _x1
      y1 = _y1
    }
    if (offsetRb > offset) {
      x2 = _x2
      y2 = _y2
    }

    exp = Math.max((Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1), exp)

    console.log(`${x1}, ${y1}`, '|', `${x2}, ${y2}`, '|', act, exp)

    if (exp > act) {
      flag = false
      break
    }
  }

  return flag
}

console.log(isDataRect(selectedArr))
