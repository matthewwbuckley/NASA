import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/root'

const initialState = {}
const middleware = [thunk]

const store = createStore(() => {
  return(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
})

export default store