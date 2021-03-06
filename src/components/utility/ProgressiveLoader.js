import React from 'react'
import { connect } from 'react-redux'

import { fetchWindow } from '../../store/actions/clientActions'


class ProgressiveLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasLoadedHD: false,
    }
    this.onLoad = this.onLoad.bind(this)
    this.hdRef = React.createRef()
    this.sdRef = React.createRef()
  }

  componentWillReceiveProps(nextProps){
    if(this.props.url !== nextProps.url){
      this.sdRef.current.style.backgroundImage = `url(${nextProps.url})`
    }
  }

  onLoad(){
    this.hdRef.current.style.backgroundImage = `url(${this.props.hdurl})`
    this.setState({hasLoadedHD: true})
  }

  render() {
    let { hasLoadedHD } = this.state

    return (
      <div className='progressive-img-container'>
        <div 
          ref={this.sdRef} 
          className={`progressive-img-sd ${hasLoadedHD ? 'hidden' : ''}`} 
        />
        <div 
          ref={this.hdRef}
          className={`progressive-img-hd`}          
        >
          <img
            className='progressive-img-hd'
            onLoad={this.onLoad}
            src={this.props.hdurl} 
            style={{display:'none'}}
          />
          <div className={`'progressive-img-child ${hasLoadedHD ? '' : 'hidden'}`}>
            {this.props.children}
          </div>
        </div>
        <div 
        >
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  screen: state.window
})

export default connect(mapStateToProps, { fetchWindow })(ProgressiveLoader)
