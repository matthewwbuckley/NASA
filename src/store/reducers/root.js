import { combineReducers } from 'redux'

import apodReducer from './apodReducer'
import windowReducer from './clientReducer'


export default combineReducers({
  window: windowReducer,
  apod: apodReducer
})