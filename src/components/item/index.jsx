import React, { Component } from 'react'
// 这里是每一个小格子
import './index.css'
import randomBackGround from '../tools/randomBg.js'
import getItemConfig from '../../utils/getItemConfig'
export default class index extends Component {
  render() {
    let color1 = randomBackGround()
    let color2 = randomBackGround()
    const { week, time, day } = this.props
    let config = getItemConfig(week, time, day)

    if (config !== null) {
      return (
        <div className='item' style={{ backgroundColor: color1 }}>
          <div>{config.name}</div>
          <div>@{config.teacher}</div>
          <div>{config.position}</div>
        </div>
      )
    } else {
      return (
        <div className='item'>

        </div>
      )
    }


  }
}
