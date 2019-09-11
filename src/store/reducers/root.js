import { combineReducers } from 'redux'

import apodReducer from './apodReducer'


export default combineReducers({
  apod: apodReducer
})