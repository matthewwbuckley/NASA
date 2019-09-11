import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from './Home'
import About from './About'

class Switcher extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    )
  }
}

export default Switcher;