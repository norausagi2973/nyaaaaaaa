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

// handleButtonClick() {
//   this.render();
// }

// export default class MyComponent extends React.Component {

//   handleButtonClick() {
//     this.render();
//   }

//   render() {
//     return (
//       <div>
//         {Math.random()}
//         <button onClick={this.handleButtonClick.bind(this)}>
//           Click me
//         </button>
//       </div>
//     )
//   }
// }

export default App
