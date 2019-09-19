import React from 'react'
import {Link} from 'react-router-dom'
import Switcher from './routes/Switcher'
import { Provider } from 'react-redux'

import store from './store/store'
import { fetchWindow } from './store/actions/clientActions'

import './styles/styles.scss'

class App extends React.Component {
  constructor(props) {
    super(props)

    // populate store with window dimensions
    fetchWindow()
  }

  render() {
    return (
    <Provider store={store} >
      <Switcher/>
    </Provider>
    )
  }
}

export default App;