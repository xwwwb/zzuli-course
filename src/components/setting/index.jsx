import React, { Component } from 'react'
import { NavBar } from 'react-vant';

export default class index extends Component {
  render() {
    return (
      <div>    <NavBar
        title="标题"
        leftText="返回"
        rightText="按钮"
        onClickLeft={() => { console.log('点击了返回按钮') }}
        onClickRight={() => { console.log('点击了右侧按钮') }}
      />
      </div>
    )
  }
}
