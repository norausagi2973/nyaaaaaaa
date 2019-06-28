import React, { Component } from 'react'
import Konva from 'konva'

class Preview extends Component {
  // 1
  constructor(props) {
    super(props)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }
  
  // 3 コンポーネントが更新された時
  componentDidUpdate(){
    const stage = new Konva.Stage({
      container: 'container',
      width: 500,
      height: 320
    })

    const layer = new Konva.Layer()
  
    const imageObj = new Image()
    imageObj.onload = function() {
      const Image = new Konva.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 500,
        height: 320
      })
      layer.add(Image)
      Image.moveToBottom()
      layer.batchDraw()
    }
    imageObj.src = this.props.previewurl
    
    const Text = new Konva.Text({
      x: stage.width() / 2,
      y: stage.height() / 2,
      text: 'LGTM',
      fontSize: 40,
      fontFamily: 'Calibri',
      fill: 'white'
    })
    Text.offsetX(Text.width() / 2);
    Text.offsetY(Text.height() / 2);

    layer.add(Text)
    stage.add(layer)
  }

  // 2
  render() {
    return (
        <div  id ='container' align="center"></div>
    )
  }
}

export default Preview