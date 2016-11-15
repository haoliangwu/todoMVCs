var performanceS = function () {}

performanceS.prototype.calculate = function (salary) {
    return salary * 4
}

var performanceA = function () {}

performanceA.prototype.calculate = function (salary) {
    return salary * 3
}

var performanceB = function () {}

performanceA.prototype.calculate = function (salary) {
    return salary * 2
}

var Bonus = function () {
    this.salary = null
    this.strategy = null;
}

Bonus.prototype.setSalary = function (salary) {
    this.salary = salary
}

Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy
}

Bonus.prototype.getBonus = function () {
    return this.strategy.calculate(this.salary)
}

var bonus = new Bonus()

bonus.setSalary(10000)
bonus.setStrategy(new performanceS())

console.log(bonus.getBonus())

bonus.setStrategy(new performanceA())

console.log(bonus.getBonus())