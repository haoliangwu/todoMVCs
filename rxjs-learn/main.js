import { Observable } from 'rxjs'
import './main.css'

const _draggle = document.querySelector('.block')
const _container = document.querySelector('.draggable')
const _draggleMouseDowns = Observable.fromEvent(_draggle, 'mousedown')
const _draggleContainerMouseMoves = Observable.fromEvent(_container, 'mousemove')
const _draggleContainerMouseUps = Observable.fromEvent(_container, 'mouseup')

const _draggleMouseDrags = _draggleMouseDowns
  .concatMap(startPoint => {
    return _draggleContainerMouseMoves
      .takeUntil(_draggleContainerMouseUps)
      .map(movePoint => {
        return {
          pageX: movePoint.pageX - startPoint.layerX,
          pageY: movePoint.pageY - startPoint.layerY
        }
      })
  })
  .do(position => {
    _draggle.style.left = position.pageX + 'px'
    _draggle.style.top = position.pageY + 'px'
  })

_draggleMouseDrags.subscribe()
