import axios from 'axios'
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

export const listRows = () => async (dispatch) => {
  try {
    dispatch({ type: ROW_LIST_REQUEST })

    const { data } = await axios.get('/rows')

    dispatch({ type: ROW_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ROW_LIST_FAIL, payload: error.message })
  }
}

export const deleteRow = (id) => async (dispatch) => {
  try {
    dispatch({ type: ROW_DELETE_REQUEST })

    await axios.delete(`/rows/${id}`)

    dispatch({ type: ROW_DELETE_SUCCESS })
  } catch (error) {
    dispatch({ type: ROW_DELETE_FAIL, payload: error.message })
  }
}

export const addRow = (row) => async (dispatch) => {
  try {
    dispatch({ type: ROW_ADD_REQUEST })

    const config = {
      'Content-Type': 'application/json'
    }

    await axios.post(`/rows`, row, config)

    dispatch({ type: ROW_ADD_SUCCESS })
  } catch (error) {
    dispatch({ type: ROW_ADD_FAIL, payload: error.message })
  }
}

export const editRow = (row) => async (dispatch) => {
  try {
    dispatch({ type: ROW_EDIT_REQUEST })

    const config = {
      'Content-Type': 'application/json'
    }

    await axios.put(`/rows/${row.id}`, row, config)

    dispatch({ type: ROW_EDIT_SUCCESS })
  } catch (error) {
    dispatch({ type: ROW_EDIT_FAIL, payload: error.message })
  }
}
