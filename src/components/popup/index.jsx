import React, { Component } from 'react'
import { Picker, Popup } from 'react-vant';
import './index.css'
export default class PopupForm extends Component {
  state = {
    columns: ['第1周',
      '第2周',
      '第3周',
      '第4周',
      '第5周',
      '第6周',
      '第7周',
      '第8周',
      '第9周',
      '第10周',
      '第11周',
      '第12周',
      '第13周',
      '第14周',
      '第15周',
      '第16周',
      '第17周',
      '第18周'],
  }

  handleClose = () => {
    this.props.closePopup()
  }

  render() {
    return (
      <Popup round visible={this.props.showPopup} position="bottom" onClose={this.handleClose}>
        <Picker
          title="选择周"
          columns={this.state.columns}
          onConfirm={(value) => {
            let pickWeek = value.match(/\d+/g)[0]
            console.log(pickWeek)
            this.handleClose()
          }}
          itemHeight={120}
        />
      </Popup>)
  }

}