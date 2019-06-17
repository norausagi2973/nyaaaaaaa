import React from 'react'
import './App.css'
import CreateButton from './CreateButton'
import ImageList from './ImageList'
import Preview from './Preview'

function App() {
  return (
    <div className="App">
      <CreateButton />
      <div class="horizontal_scroll_wrap">
        <ul class="scroll_lst">
          <ImageList />
        </ul>
      </div>
      <Preview />
    </div>
  )
}

export default App
