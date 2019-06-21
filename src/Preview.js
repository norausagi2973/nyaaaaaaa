import React, { Component } from 'react'
import logo from './image/1.png'
import ImageList from './ImageList'
import Konva from 'konva'

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://picsum.photos/id/0/5616/3744'
    }
  }

//   const FunctionalChild= (props) => (
//   <div>
//     {props.value}
//   </div>
// );


  render() {
    return (
      <div>
        <img src={this.state.url} className="Preview"/> 
      </div>
    );
  }
}
// function Preview() {
  
//   return (
//     <div>
//       <img src={logo} className="Preview"/> 
//     </div>
//   );
// }

export default Preview