var CreateDiv = (function () {
    var instance

    var CreateDiv = function (html) {
        if (instance) {
            return instance
        }

        this.html = html
        this.init()

        return instance = this
    }

    CreateDiv.prototype.init = function () {
        console.log('only init once..')
    }

    return CreateDiv
})()

var a = new CreateDiv('instance1')
var b = new CreateDiv('instance2')

console.log(a === b)

/*缺点
使用了闭包和匿名函数自调用，增加了复杂度
CreateDiv函数不符合单一职责原则*/