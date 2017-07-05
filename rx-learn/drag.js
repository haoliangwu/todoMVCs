import { Observable } from 'rx'

document.body.style.height = '100vh'
document.body.style.width = '100vw'
document.body.innerHTML = `<div style="position: absolute; width: 100px; height: 100px; background: #ccc;" id="drag">drag</div>`

const $drag = document.getElementById('drag')
const $body = document.body

const mousedown$ = Observable.fromEvent($drag, 'mousedown')
const mouseup$ = Observable.fromEvent($body, 'mouseup')
const mousemove$ = Observable.fromEvent($body, 'mousemove')

// 创建事件源
// 从鼠标按下事件开始
// 之后转化为鼠标移动事件，同时移动事件会结束于鼠标放开事件
// 最后将所有的移动事件流合并在一起（其实就是一个完整的移动事件流）
const source = mousedown$
  .map(e => mousemove$.takeUntil(mouseup$))
  .concatAll()

// 处理合并后的移动事件流
source
// 转化为移动过程中的每个点坐标
.map(m => {
  return {
    x: m.clientX,
    y: m.clientY
  }
})
// 副作用为修改$drag元素的样式
.do(({x, y}) => {
  $drag.style.left = x + 'px'
  $drag.style.top = y + 'px'
})
.subscribe()
