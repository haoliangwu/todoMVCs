import { combineReducers } from 'redux'
import { handleAction } from 'redux-actions'
import { addTodoAction, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
import {handlePageChanged} from './pagination/reducers'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = handleAction(addTodoAction, (state, action) => {
  const { payload } = action

  return [
    ...state,
    {
      text: payload.text,
      completed: false
    }
  ]
}, [])

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
