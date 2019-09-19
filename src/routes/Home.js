import React from 'react'
import { connect } from 'react-redux'
import { fetchApod } from '../store/actions/apodActions'
import apodReducer from '../store/reducers/apodReducer'

import ProgressiveLoader from '../components/utility/ProgressiveLoader'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchApod()
  }

  render() {
    let data = this.props.apod.data ? this.props.apod.data : {url: null, hdurl: null}

    return (
      <div>
        <ProgressiveLoader url={data.url} hdurl={data.hdurl} >
          <div class="info">HELLO</div>
        </ProgressiveLoader>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apod: state.apod
})

export default connect(mapStateToProps, { fetchApod })(Home)