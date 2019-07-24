import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

class CreateButton extends Component {
  // コンストラクタの実行タイミング => 一番最初
  // 1 
  constructor(props) {
    super(props)
    this.reloadImages = this.reloadImages.bind(this)
  }

  // 2 画面が表示される前に実行
  // reactのライフサイクルを壊すので、componentWillMountは最初だけ→reloadImagesで繰り返し
  componentWillMount() {
    // ('URL')にHTTP GETリクエスト
    axios.get('https://picsum.photos/v2/list')
    .then(res => {
       const urls = res.data.map(data => (data.download_url))
       const shuffle = require('shuffle-array')
       shuffle(urls)
       this.props.urls(urls)
    })
    .catch(error => console.log(error))
  }

  // 4 クリックされた時　urlの配列を渡す→App.js
  reloadImages() {
    axios.get('https://picsum.photos/v2/list')
    .then(res => {
       const urls = res.data.map(data => (data.download_url))
       const shuffle = require('shuffle-array')
       shuffle(urls)
       this.props.urls(urls)
    })
    .catch(error => console.log(error))
  }
  
  // 3
  render() {
    return (
      <div className="Button">
        <Button variant="outlined" onClick={this.reloadImages}>
          画像を生成する
        </Button>
      </div>
    )
  }
}

export default CreateButton