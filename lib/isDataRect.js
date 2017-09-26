const selectedArr = [
  [0, 0], [0, 1],
  [1, 0], [1, 1]
]

const isDataRect = (arr) => {
  let xMax = 0, xMin = 0
  let yMax = 0, yMin = 0

  arr.forEach(([x, y]) => {
    xMin = Math.min(x, xMin)
    xMax = Math.max(x, xMax)
    yMin = Math.min(y, yMin)
    yMax = Math.max(y, yMax)
  })

  return (xMax - xMin + 1) * (yMax - yMin + 1) === arr.length
}

console.log(isDataRect(selectedArr))
