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

export default CreateButton