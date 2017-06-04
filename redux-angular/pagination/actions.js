import { createAction } from 'redux-actions'

export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'

export const nextPage = createAction(NEXT_PAGE)
export const previousPage = createAction(PREVIOUS_PAGE)

export default {
  nextPage, previousPage
}
