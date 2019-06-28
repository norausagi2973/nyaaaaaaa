import React, { Component } from 'react'
import Konva from 'konva'
import Button from '@material-ui/core/Button'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.preview = this.preview.bind(this)
  }

  preview(){
    var stage = new Konva.Stage({
      container: 'container',
      width: 340,
      height: 300
    })

    var layer = new Konva.Layer()
  
    var imageObj = new Image();
      imageObj.onload = function() {
        var yoda = new Konva.Image({
          x: 50,
          y: 50,
          image: imageObj,
          width: 300,
          height: 200
        });
        layer.add(yoda)
        layer.batchDraw()
      };
      imageObj.src = this.props.previewurl

    var Text = new Konva.Text({
      text: 'LGTM',
      fontSize: 30,
      fontFamily: 'Calibri',
      align: 'center'
    })
    
    console.log(imageObj)
    layer.add(Text)
    stage.add(layer)
  }

  
  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.preview}>
          あああ
        </Button>
        <div id = 'container' className="Preview"></div>
      </div>
    )
  }
}


// render() {
//   return (
//     <div>
//       <img src={this.props.previewurl} className="Preview"/> 
//     </div>
//   )
// }


export default Preview