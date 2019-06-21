import React, { Component } from 'react'
import axios from 'axios'

class ImageList extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
    };
    this.onClick = this.onClick.bind(this)
  }
  

  onClick(e) {
    var url = e.currentTarget.getAttribute('data-url')
    console.log(url); // undefined
    this.props.previewurl(url)
  }

  // componentWillMount() {
  //   axios.get('https://picsum.photos/v2/list')
  //        .then(res => {
  //           var url = res.data.map(data => (data.download_url))
  //           this.setState({items: url})
  //        })
  //        .catch(error => console.log(error))
  // }
  
  render() {
      // if(this.props.imagelisturl == 0){
      //   return (
      //     this.state.items.map((url) => 
      //     <li key={url} class="scroll_item">
      //           <img src= {url}  onClick={this.onClick} data-url= {url} width="300" height="200"/>
      //     </li>
      //     )
      //   )
      // }else{
      return (
        this.props.imagelisturl.map((url) => 
        <li key={url} class="scroll_item">
          <img src={url}  onClick={this.onClick} data-url={url} width="300" height="200"/>
        </li>
      )
    )
  }
}

// import React, { Component } from 'react'
// import axios from 'axios'

// class ImageList extends Component {
//   constructor(){
//     super();
//     this.state = {
//       items: [],
//       url:'https://picsum.photos/id/100/2500/1656'
//     };
//     this.onClick = this.onClick.bind(this)
//   }
  

//   onClick(e) {
//     var url = e.currentTarget.getAttribute('data-url')
//     console.log(url); // undefined
//     this.setState({url: url})
//     return this.props.previewurl(url)
//   }

//   componentWillMount() {
//     const num = Array(30)
//     const url = []
//     console.log("aaa")
//     console.log(num)
//     num.map(() => 
//       console.log("aaa"),
//       axios.get('https://picsum.photos/200/300')
//           .then(res => {
//             url.push(res.data.download_url)
//             console.log(res.data.download_url)
//          })
//          .catch(error => console.log(error))
//     )
//     this.setState({items: url})
//     console.log(this.state.items)
//     console.log(url)
//   }
  
//   render() {
//       // if(this.props.imagelisturl == 0){
//         return (
//           this.state.items.map((url) => 
//           <li key={url} class="scroll_item">
//                 <img src= {url}  onClick={this.onClick} data-url= {url} width="300" height="200"/>
//           </li>
//           )
//         )
//       // }else{
//       //   return (
//       //     this.props.imagelisturl.map((url) => 
//       //     <li key={url} class="scroll_item">
//       //           <img src= {url}  onClick={this.onClick} data-url= {url} width="300" height="200"/>
//       //     </li>
//       //     )
//       //   )
//       // }
//   }
// }

export default ImageList