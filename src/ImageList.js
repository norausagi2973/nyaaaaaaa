import React, { Component } from 'react'
import axios from 'axios'
import Preview from './Preview'


class ImageList extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      url:'https://picsum.photos/id/100/2500/1656'
    };
    this.onClick = this.onClick.bind(this)
  }
  

  onClick(e) {
    var url = e.currentTarget.getAttribute('data-url')
    console.log(url); // undefined
    this.setState({url: url})
  }

  componentWillMount() {
    axios.get('https://picsum.photos/v2/list')
         .then(res => {
            var url = res.data.map(data => (data.download_url))
            this.setState({items: url})
         })
         .catch(error => console.log(error))
  }
  
  render() {
    console.log(this.state.url)
    return (
      this.state.items.map((url) => 
        <li key={url} class="scroll_item">
              <img src= {url}  onClick={this.onClick} data-url= {url} width="300" height="200"/>
        </li>
      )
      // <Preview value={this.state.url} />
    )
  }
}

// function a(e) {
//   var url = e.currentTarget.getAttribute('data-url')
//   console.log(this.state)
//   this.setState({url: url})
// }



export default ImageList