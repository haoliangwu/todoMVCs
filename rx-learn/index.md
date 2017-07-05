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
* take 在一个流中截取某几个事件
* first 等价于 take(1) 取一个流中的第一个事件
* takeUntil 直到某一个流开始时，使当前流结束
* concatAll 将若干个流合并为一个流（头尾相连）
> 假设 concatAll(A,B), 那么B流只会在A流结束时开始。