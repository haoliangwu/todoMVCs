var CreateDiv = function (html) {
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function () {
    console.log('init just once');
}

var ProxySingletonCreateDiv = (
    function () {
        var instance
        return function (html) {
            if (!instance) {
                instance = new CreateDiv(html)
            }

            return instance
        }
    }
)()

var a = ProxySingletonCreateDiv('instance1')
var b = ProxySingletonCreateDiv('instance2')

console.log(a === b);
// true