import { FETCH_APOD } from './types'

const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=crxPIjQNf1I3Qjdzrm4sRkwPJZxo7WbSg5hCu1TO'

export const fetchApod = () => dispatch => {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => 
    dispatch({
      type: FETCH_APOD,
      data: data
    })
  )
}