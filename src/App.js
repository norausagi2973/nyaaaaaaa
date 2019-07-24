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
    // bindメソッドを使って他の関数との結びつけが可能　https://www.sejuku.net/blog/49161
    // https://jsprimer.net/basic/function-this/
    this.imageurllist = this.imageurllist.bind(this)
    this.previewurl = this.previewurl.bind(this)
  }

  // 2 CreateButtonのボタンがクリックされた時
  imageurllist(urls){
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
        <CreateButton urls={this.imageurllist}/>
        <div class="horizontal_scroll_wrap">
          <ul class="scroll_lst">
            <ImageList imageurllist={this.state.items} previewurl={this.previewurl}/>
          </ul>
        </div>
        <Preview previewurl={this.state.previewurl}/>
      </div>
    )
  }
}

export default App
