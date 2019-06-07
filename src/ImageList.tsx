import React from 'react'
import logo from './image/1.png'

function ImageList() {
  
  return (
    <div className="example">
      <img src={logo} className="Image-list"/> 
      <img src={logo} className="Image-list"/> 
      <img src={logo} className="Image-list"/> 
      <img src={logo} className="Image-list"/> 
    </div>
  );
}

export default ImageList