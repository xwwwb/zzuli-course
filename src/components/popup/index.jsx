import React, { Component } from 'react'
import { Picker, Popup } from 'react-vant';

export default class PopupForm extends Component {
  state = {
    columns: ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'],
  }

  handleClose = () => {
    this.props.closePopup()
  }

  render() {
    return (
      <Popup round visible={this.props.showPopup} position="bottom" onClose={this.handleClose}>
        <Picker
          title="标题"
          columns={this.state.columns}
          onConfirm={(value) => {
            console.log(value)
            this.handleClose()
          }}
        />
      </Popup>)
  }

}