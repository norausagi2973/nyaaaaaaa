import React, { Component } from 'react'
import './App.css'
import CreateButton from './CreateButton'
import ImageList from './ImageList'
import Preview from './Preview'



class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      previewurl: null
    }
    this.imagelisturl = this.imagelisturl.bind(this)
    this.previewurl = this.previewurl.bind(this)
  }

  imagelisturl(url){
    console.log(url)
    this.setState({items: url})
  }

  previewurl(url){
    console.log(url)
    this.setState({previewurl: url})
    console.log(this.state.previewurl)
  }

  render() {
    console.log(this.state.items)
    console.log(this.state.previewurl)
    return (
      <div className="App">
        <CreateButton parentMethod={this.imagelisturl}/>
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
