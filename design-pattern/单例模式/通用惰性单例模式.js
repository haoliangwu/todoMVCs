var getSingle = function (fn) {
    var result

    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}

var single = getSingle(function (a) {
    return a
})

console.log(single('instance1')) // instance1
console.log(single('instance2')) // instance2

console.log(single('instance1') === single('instance2'))
    // true