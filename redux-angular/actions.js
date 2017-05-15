import {createActions, createAction} from 'redux-actions'

/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export const addTodoAction = createAction(ADD_TODO)

// export function addTodo (promise) {
//   // return promise.then(text => ({type: ADD_TODO, text}))
//   return {type: ADD_TODO, api: 'foo', payload: 'bar'}
// }

export function toggleTodo (index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter (filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

const actions = createActions({
  [ADD_TODO]: e => e
}, TOGGLE_TODO, SET_VISIBILITY_FILTER)

export default actions
