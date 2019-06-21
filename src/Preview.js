import React, { Component } from 'react'
import Konva from 'konva'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <img src={this.props.previewurl} className="Preview"/> 
      </div>
    )
  }
}

export default Preview