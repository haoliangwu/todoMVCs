import Rx from 'rxjs'
import $ from 'jquery'
import _ from 'lodash'

// 从已有数据转化 Observable
Rx.Observable.of('foo', 'bar')
Rx.Observable.from([1, 2, 3])
Rx.Observable.fromEvent(document.querySelector('.button1'), 'click')
// Rx.Observable.fromPromise(new Promise())

// 创建自定义 Observable
const Observable1 = new Rx.Subject()
Observable1.subscribe(v => console.log(v))
Observable1.next(1)

const Observable2 = Rx.Observable.create(observer => {
  observer.next('foo')
  setTimeout(() => observer.next('bar'), 1000)
})
Observable2.subscribe(value => console.log(value))

const input = Rx.Observable.fromEvent(document.querySelector('input'), 'keypress')

const stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click')

// 管理事件流
// input
// .filter(event => event.target.value.length > 2)
// .delay(200)
// .throttleTime(200)
// .debounceTime(200)
// .take(3)
// .takeUntil(stopStream)
// .subscribe(e => console.log(e.target.value))

// 转化新值
input
  .map(e => e.target.value)
  .subscribe(v => console.log(v))
