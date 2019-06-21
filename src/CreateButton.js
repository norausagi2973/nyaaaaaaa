import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

class CreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.a = this.a.bind(this)
  }

  a() {
    axios.get('https://picsum.photos/v2/list')
    .then(res => {
       var url = res.data.map(data => (data.download_url))
       console.log(this.state.items)
       this.props.parentMethod(url)
    })
    .catch(error => console.log(error))
  }
  

  render() {
    return (
      <div className="Button">
        <Button variant="outlined" onClick={this.a}>
          画像を生成する
        </Button>
      </div>
    )
  }
}

// function loadImage(id)
// {
// 	//画像を読み込んでImageオブジェクトを作成する
// 	var image = new Image();
// 	image.src = 'canvas.jpg';
// 	image.onload = (function () {
// 		//画像ロードが完了してからキャンバスの準備をする
// 		var canvas = document.getElementById(id);
// 		var ctx = canvas.getContext('2d');
// 		//キャンバスのサイズを画像サイズに合わせる
// 		canvas.width = image.width;
// 		canvas.height = image.height;
// 		//キャンバスに画像を描画（開始位置0,0）
// 		ctx.drawImage(image, 0, 0);
// 	});
// }
// //キャンバスに文字を描く
// function drawText(canvas_id, text_id)
// {
// 	var canvas = document.getElementById(canvas_id);
// 	var ctx = canvas.getContext('2d');
// 	var text = document.getElementById(text_id);
// 	//文字のスタイルを指定
// 	ctx.font = '32px serif';
// 	ctx.fillStyle = '#404040';
// 	//文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
// 	ctx.textBaseline = 'center';
// 	ctx.textAlign = 'center';
// 	//座標を指定して文字を描く（座標は画像の中心に）
// 	var x = (canvas.width / 2);
// 	var y = (canvas.height / 2);
// 	ctx.fillText(text.value, x, y);
// }

export default CreateButton