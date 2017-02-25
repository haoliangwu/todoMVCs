import { Observable, Subject } from 'rxjs'

const timeout = 1000

// 每月工资 10k 每半个月花 3k 100万一套房子 买了房子就出租 租金一个月 5k 在攒够100万买一套房并且中国经济不崩溃的前提下 多长时间实现财富自由？
const salary$ = Observable.interval(timeout).mapTo(10)
const consume$ = Observable.interval(timeout / 2).mapTo(3)

const rest$ = Observable.combineLatest(salary$, consume$).map(arr => {
  const [salary, consume] = arr

  const rest = salary - consume

  return rest >= 0 ? rest : 0
})
const house$ = new Subject()

const houseCount$ = house$
  .scan((acc, num) => acc + num, 0)
  .startWith(0)

const rent$ = Observable
  .interval(timeout)
  .withLatestFrom(houseCount$)
  .filter(arr => arr[1] > 0)
  .map(arr => arr[1] * 5)

const income$ = Observable
  .merge(rest$, rent$)

const cash$ = income$
  .scan((acc, num) => {
    const newSum = acc + num

    if (newSum > 1000) {
      house$.next(1)
      return newSum - 1000
    }
    return newSum
  }, 0)

houseCount$.subscribe(num => console.log(`houseCount: ${num}`))
cash$.map((cash, i) => console.log(`been through ${i++} month, your total cash: ${cash}k`)).subscribe()
