

// import React, { Component } from 'react';
// import axios from 'axios';
// import ImageMain from './ImageMain';
 
// class ImageList extends Component {
//   state = {
//     images: []
//   }
 
//   componentWillMount() {
//     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
//          .then(res => {
//            this.setState({ images: res.data });
//          });
//   }
 
//   renderImages() {
//     return this.state.images.map(data => {
//       return <ImageMain key={data.titlet} imageInfo={data} />
//     });
//   }
 
//   render() {
//     return (
//       <div>
//         {this.renderImages()}
//       </div>
//     )
//   }
// }
 


// import React from 'react'
// import logo from './image/1.png'

// var a = fetch('https://picsum.photos/v2/list')

// function ImageList() {
//   console.log(fetch('https://picsum.photos/v2/list'))
//   console.log(a)
//   return (
//     <div className="example">
//       <img src={logo} className="Image-list"/>
//       <img src={logo} className="Image-list"/>
//       <img src={logo} className="Image-list"/>
//       <img src={logo} className="Image-list"/>
//     </div>
//   )
// }


// }

import React, { Component } from 'react';
import axios from 'axios';

class ImageList extends Component {
  constructor(){
    super();
    this.state = {
      items:[]
    };
  }
  
  componentWillMount(){
    const request = axios.create({
      baseURL: 'https://picsum.photos/v2/list'
    })
    request.get()
      .then(res => {
        this.setState({
          items: res.data
        });
      })
  }
  
  
  render() {
    return (
      <div>
        {this.state.items}
      </div>
    )
  }
}

export default ImageList