var Singleton = function (name) {
    this.name = name
    this.instance = null
}


Singleton.prototype.getName = function () {
    console.log(this.name)
}


Singleton.getInstance = function (name) {
    if (!this.instance)
        this.instance = new Singleton(name)
    return this.instance
}


var a = Singleton.getInstance('instance1')
var b = Singleton.getInstance('instance2')


console.log(a === b)
    // true