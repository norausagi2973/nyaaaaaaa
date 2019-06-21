import React from 'react'
import Button from '@material-ui/core/Button'

function CreateButton() {
  return (
    <div className="Button">
      <Button variant="outlined" onClick={a}>
        画像を生成する
      </Button>
    </div>
  )
}

function a() {
  return (console.log("aaaa"))
}

export default CreateButton