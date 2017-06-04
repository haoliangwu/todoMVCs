import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions, handleAction } from 'redux-actions'
import { nextPage, previousPage } from './actions'

const initPaginationState = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

export const handlePageChanged = handleActions({
  NEXT_PAGE: (state, action) => R.merge(state, action.payload),
  PREVIOUS_PAGE: (state, action) => R.merge(state, action.payload)
}, initPaginationState)
