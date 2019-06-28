import React, { Component } from 'react'
import './App.css'
import CreateButton from './CreateButton'
import ImageList from './ImageList'
import Preview from './Preview'

class App extends Component {
  // 1
  constructor(){
    super();
    this.state = {
      items: [],
      previewurl: null
    }
    // 復習ポイント
    this.imagelisturl = this.imagelisturl.bind(this)
    this.previewurl = this.previewurl.bind(this)
  }

  // 2 CreateButtonのボタンがクリックされた時
  imagelisturl(urls){
    this.setState({items: urls})
  }

  // 4 ImageListの画像がクリックされた時
  previewurl(url){
    this.setState({previewurl: url})
  }

  // 3
  render() {
    return (
      <div className="App">
        <CreateButton urls={this.imagelisturl}/>
        <div class="horizontal_scroll_wrap">
          <ul class="scroll_lst">
            <ImageList imagelisturl={this.state.items} previewurl={this.previewurl}/>
          </ul>
        </div>
        <Preview previewurl={this.state.previewurl}/>
      </div>
    )
  }
}

export default App
