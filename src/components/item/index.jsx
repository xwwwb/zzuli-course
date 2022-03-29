import React, { Component } from 'react'
// 这里是每一个小格子
import './index.css'
import getItemConfig from '../../utils/getItemConfig'
export default class index extends Component {
  render() {
    const { week, time, day } = this.props
    let config = getItemConfig(week, time, day)

    if (config !== null) {
      return (
        <div className='item' style={{ backgroundColor: config.color }}>
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
