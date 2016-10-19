var arr1 = "['/', '2', '3']"
var arr2 = "['+', ['+', 2, 3], ['*', 3.2, 2]]"
var arr3 = "['and', ['<', 1, 2], ['>', 1, 2]]"
var arr4 = "['field_value', 'hello']"

var mapping = {
    '==': function (a, b) { return a === b },
    '!=': function (a, b) { return a !== b },
    '>': function (a, b) { return a > b },
    '>=': function (a, b) { return a >= b },
    '<': function (a, b) { return a < b },
    '<=': function (a, b) { return a <= b },
    'and': function (a, b) { return a && b },
    // 'in': 'in_',
    'or': function (a, b) { return a || b },
    // 'not': 'not_',
    // 'str': 'str_',
    // 'int': 'int_',
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '*': function (a, b) { return a * b },
    '/': function (a, b) { return new Number(a / b).toFixed(2) },
    // todo 实现一个根据字段取值的方法
    'field_value': function name(a) {
            return a + ' world'
        }
        // 'judge': 'judge',
}

var parser = function (arr) {
    arr = eval(arr)

    var operator = arr.shift().trim()
    var fn = mapping[operator]
    var signature = fn.toString().match(/\((.*)\)/)[1]

    if (!fn || arr.length < signature.split(',').length) return

    return fn.apply(this, arr.map(e => {
        return e.constructor === Array ? parser(e) : e
    }))
}

console.log(parser(arr1))
    // 0.67
console.log(parser(arr2))
    // 11.4
console.log(parser(arr3));
// false
console.log(parser(arr4));
// hello world