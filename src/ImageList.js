

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



// 

// 
// window.onload = () => {
//   let width_16 = Math.floor(window.innerWidth / 4);//画像を画面に4列並べるために、画面幅取得後4で割る。小数点以下は切り捨て
//   let height_9 = Math.floor(width_16 * 0.5625);//16：9サイズになるように、上記の幅から高さを計算

//   // https://picsum.photos/list から、jsonファイルを扱う
//   let xhr;
//   xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://picsum.photos/v2/list", false);
//   xhr.send(null);

//   let targetElm = document.getElementById('target');//画像を出力する領域
//   let data = xhr.responseText;
//   let jsondata = JSON.parse(data);//オブジェクトとして扱う

//   // ダミー画像を表示させるfunction
//   function ImageList(data) {
//     //imgタグを作成
//     let imgtag = document.createElement('img');
//     //jsondataからidを取得。tada.jsで使用する為、"data-src"属性に画像urlをセットする
//     imgtag.setAttribute('data-src','https://picsum.photos/' + width_16 + '/' + height_9 + '?image=' + data.id);
//     //img要素を追加していく
//     targetElm.appendChild(imgtag);
//   }
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