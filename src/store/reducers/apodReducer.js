import { FETCH_APOD } from '../actions/types'

const initialState = {
  data: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_APOD:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}