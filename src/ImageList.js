import React, { Component } from 'react'

class ImageList extends Component {
  // 1
  constructor(){
    super()
    this.setImageList = this.onClick.bind(this)
  }

  //3 クリックされた時　クリックされた画像のURLを渡す→App.js
  onClick(e) {
    const url = e.currentTarget.getAttribute('data-url')
    this.props.previewurl(url)
  }
  
  //2
  render() {
      return (
        //map→新しい配列を作る　each→繰り返すだけ
        this.props.imageurllist.map((url) =>
        <li key={url} class="scroll_item">
          <img src={url}  onClick={this.setImageList} data-url={url} width="300" height="200"/>
        </li>
      )
    )
  }
}

export default ImageList