import { FETCH_WINDOW } from '../actions/types'

const initialState = {
  data: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WINDOW:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}