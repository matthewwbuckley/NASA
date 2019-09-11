import React from 'react'
import {Link} from 'react-router-dom'

import Switcher from './routes/Switcher'

import './styles/styles.scss'

import img from './assets/nasa.png'

class App extends React.Component {
  render() {
    return (
    <div>
      <h1 >Nasa</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <img src={img} ></img>
      <Switcher/>
    </div>
    )
  }
}

export default App;