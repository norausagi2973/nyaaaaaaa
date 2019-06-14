import React, { Component } from 'react'
import axios from 'axios'

class ImageList extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    };
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
    return (
      this.state.items.map(url => <img src= {url} width="300" height="200"/>)
    )
  }
}

export default ImageList