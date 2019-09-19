import { FETCH_WINDOW } from './types'

export const fetchWindow = () => dispatch => {
  dispatch({
    type: FETCH_WINDOW,
    data: {
      height: window.innerHeight,
      width: window.innerWidth,
    }
  })

}