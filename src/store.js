import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  rowAddReducer,
  rowDeleteReducer,
  rowEditReducer,
  rowListReducer
} from './stateManager/rowReducers'

const reducer = combineReducers({
  rowList: rowListReducer,
  rowDelete: rowDeleteReducer,
  rowAdd: rowAddReducer,
  rowEdit: rowEditReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
