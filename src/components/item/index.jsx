import React, { Component } from 'react'
// 这里是每一个小格子
import './index.css'
import randomBackGround from '../tools/randomBg.js'
export default class index extends Component {
  render() {
    let color = randomBackGround()
    console.log(color)
    return (
      <div className='item' style={{backgroundColor:color}}>
        <div>高等数学</div>
        <div>二教楼216</div>
        <div>李华</div>
      </div>
    )
  }
}
