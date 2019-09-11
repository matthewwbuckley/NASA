import React from 'react'
import {Link} from 'react-router-dom'
import Switcher from './routes/Switcher'
import { Provider } from 'react-redux'

import store from './store/store'

import './styles/styles.scss'

import img from './assets/nasa.png'

class App extends React.Component {
  render() {
    return (
    <Provider store={store} >
      <h1 >Nasa</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <img src={img} ></img>
      <Switcher/>
    </Provider>
    )
  }
}

export default App;