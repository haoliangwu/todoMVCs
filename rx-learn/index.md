## 创建 observable 总结

### 基本
* create 为最基本的方法
* of 创建有限的同步序列流
* from 创建任何可序列化的参数的序列流（比如 Array String 或者 Promise）

### 事件类型
* fromEvent 根据 DOM 元素的各种事件创建一个事件流
* fromEventPattern 根据类事件对象来创建一个事件流（所谓类事件就是存在注册和反注册方法的事件模型）

### 特殊类型
* empty 创建一个空队列流 什么都不做
* never 创建一个无穷队列流 未来会做某件事，但是你等不到
* throw 创建一个抛出错误的流

### 时间类型
* timer 创建一个自定义触发时间点，定时触发元素的队列流
* interval 创建一个定时触发元素的队列流

## operators
* map 从一个流变换为另一个流（体现一种 x -> y 映射关系）
* mapTo 同 map, 只不过从一个流变化为另一个固定的流
* filter 根据某些断言，过滤一个流
* take 在一个流中截取从开头数的某几个事件
* takeLast 与 take 类型，只不过是从事件末尾开始进行截取
> takeLast 只有当流是有限的情况下或无线流 complete 的情况下有效
* skip 于 take 相反，它的作用是忽略从开头数的某几个事件
* first 等价于 take(1) 取一个流中的第一个事件
* last 等价于 take(n) 取一个流中的最后一个事件，同样具有和takeLast说明中的特性
* takeUntil 直到某一个流开始时，使当前流结束
* merge 将若干个流合并为一个流（按时间顺序）
> merge 描述的业务场景中的事件关系是或的关系，好比一群人赛跑，任何一个人冲过终点，那么比赛的冠军都会产生
* concat 将若干个流组合为一个流（头尾相连）
> 假设 concat(A,B), 那么B流只会在A流结束时开始。
* concatAll 将一个包含若干流的流组合为一个流（头尾相连）
* startWith 将一个流转化为以某个元素为开头的流（产生值的逻辑是同步的）
* combineLatest 组合两个流中最新值并形成一个新的流，任意流的新值均会使形成的新流产生一个新值
> combineLatest 描述的业务成精中的事件关系是与的关系，好比扑克游戏，每轮出牌均会以最新的牌为标准
* zip 按事件发生序列的索引，依次组合两个流中的各个事件，并形成一个新流
* withLatestFrom 流的合成方式与 combineLastest 相同，不同的地方是，只有在被合成的流产生新的事件时，新流才会生成一个新值
* scan 和 Array.reduce 很像，只不过最后会返回一个 Observable 实例，而 reduce 会返回一个值
* buffer 在一个流中缓存所有事件，直到另一个流中触发事件时，把缓存的事件合并为一个事件触发
* bufferTime 同上，按缓存时间间隔来缓存
* bufferCount 同上，按最大缓存数来缓存
* bufferWhen 同上，按另一个流
* delay 按时间段或指定日期推迟一个流的触发时间点
* delayWhen 按指定回调函数的
* debounce 一定时间内降低事件触发的频率
* throttle 一定时间内进行事件节流
* distinct 一个流中只触发唯一的事件
* distinctUntilChanged 一个流中不连续触发相同的事件
* catch 发生错误时，捕获错误流
* retry 重连因发生错误而中断的流
* retryWhen 发生错误时，捕获错误流，当错误流执行完毕后，重连因错误中断的流
* repeat 在一个流执行完毕后重连
## high-order operators
* switch 永远订阅最新的二维流而退订上一次订阅的流
* concatAll 将所有二维流首尾相连连接，合并为一个流
* mergeAll 将所有二维流按时间维度合并为一个流
* switchMap 等价于 map + switch
* concatMap 等价于 map + concatAll
* mergeMap(flatMap) 等价于 map + mergeAll
> 以上三种都是语法糖的operator，因为可以省去我们在map执行完毕后调用high-order operator的代码，可读性更高
## high-order operator factory
* window 当参数的流触发一个事件时，缓存若干事件，并生成一个新流
* windowToggle 同 window，只不过还可以指定第二个参数为生成流的标志量
* groupBy 按指定条件来将一个流的事件分为若干流
## subject
* behavior subject 可以在订阅时 将当前最新的事件作为为一个元素推送给订阅者
* replay subject 可以在订阅时 重播当前 subject 之前发生的若干事件推送给订阅者
* async subject 当 subject 结束时 将最后一个事件作为一个新的事件推送到新的订阅者
* multicast 将一个 observable 转化为可挂载的，但必须手动挂载
* refCount 将一个 observable 转化为可挂载的，且为自动挂载
* publish multicast(new Rx.Subject()) 语法糖
  * publishReplay multicast(new Rx.ReplaySubject()) 语法糖
  * publishBehavior multicast(new Rx.BehaviorSubject()) 语法糖
  * publishLast multicast(new Rx.AsyncSubject()) 语法糖
* share 等价于 .publish().refCount()