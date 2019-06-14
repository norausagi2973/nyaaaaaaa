import React from 'react'
import './App.css'
import CreateButton from './CreateButton'
import ImageList from './ImageList'
import Preview from './Preview'

function App() {
  return (
    <div className="App">
      <CreateButton />
      <ImageList />
      <Preview />
    </div>
  )
}

export default App