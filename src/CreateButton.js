import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

class CreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount() {
    var num = Math.floor( Math.random() * 33 ) + 1
    axios.get('https://picsum.photos/v2/list?page='+ num)
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
        <Button variant="outlined" onClick={this.componentWillMount}>
          画像を生成する
        </Button>
      </div>
    )
  }
}

export default CreateButton