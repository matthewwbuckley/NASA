import React from 'react'
import { connect } from 'react-redux'
import { fetchApod } from '../store/actions/apodActions'
import apodReducer from '../store/reducers/apodReducer'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchApod()
  }

  render() {
    let image = null;


    return (
      <div>
        <h1>HOME</h1>
        {JSON.stringify(this.props.apod)}
        <img src={this.props.apod.data.hdurl}></img>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apod: state.apod
})

export default connect(mapStateToProps, { fetchApod })(Home)