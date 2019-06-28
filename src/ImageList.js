import React, { Component } from 'react'

class ImageList extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
    };
    this.onClick = this.onClick.bind(this)
  }
  

  onClick(e) {
    const url = e.currentTarget.getAttribute('data-url')
    this.props.previewurl(url)
  }
  
  render() {
      return (
        this.props.imagelisturl.map((url) => 
        <li key={url} class="scroll_item">
          <img src={url}  onClick={this.onClick} data-url={url} width="300" height="200"/>
        </li>
      )
    )
  }
}

export default ImageList