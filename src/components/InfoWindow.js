import React from 'react'
import { connect } from 'react-redux'

class InfoWindow extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="info-spacer">
        <div className="info-outer">
          <div className="info-inner">
            <div className="info-title">
              {this.props.apod.data.title}
            </div>
            <div className="info-explination">
              {this.props.apod.data.explanation}
            </div>
            <div className="info-copyright">
              © {this.props.apod.data.copyright}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  apod: state.apod
})

export default connect(mapStateToProps)(InfoWindow)