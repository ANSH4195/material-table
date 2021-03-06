import {
  ROW_LIST_REQUEST,
  ROW_LIST_SUCCESS,
  ROW_LIST_FAIL,
  ROW_DELETE_REQUEST,
  ROW_DELETE_SUCCESS,
  ROW_DELETE_FAIL,
  ROW_ADD_REQUEST,
  ROW_ADD_SUCCESS,
  ROW_ADD_FAIL,
  ROW_EDIT_REQUEST,
  ROW_EDIT_SUCCESS,
  ROW_EDIT_FAIL
} from './types'

export const rowListReducer = (state = { rows: [] }, action) => {
  switch (action.type) {
    case ROW_LIST_REQUEST:
      return { loading: true, rows: [] }
    case ROW_LIST_SUCCESS:
      return { loading: false, rows: action.payload }
    case ROW_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const rowDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ROW_DELETE_REQUEST:
      return { loading: true }
    case ROW_DELETE_SUCCESS:
      return { loading: false, success: true }
    case ROW_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const rowAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ROW_ADD_REQUEST:
      return { loading: true }
    case ROW_ADD_SUCCESS:
      return { loading: false, success: true }
    case ROW_ADD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const rowEditReducer = (state = {}, action) => {
  switch (action.type) {
    case ROW_EDIT_REQUEST:
      return { loading: true }
    case ROW_EDIT_SUCCESS:
      return { loading: false, success: true }
    case ROW_EDIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
