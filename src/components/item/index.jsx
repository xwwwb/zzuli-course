import React, { Component } from 'react'
// 这里是每一个小格子
import './index.css'
import getItemConfig from '../../utils/getItemConfig'
export default class index extends Component {
  render() {
    const { week, time, day } = this.props
    let config = getItemConfig(week, time, day)
    // week 第几周 time 第几节 day 星期几
    // if (week === 5 && time === 3 && day === 5) {
    //   console.log(config)
    // }
    if (config !== null) {
      if (config.show) {
        return (
          <div className='item' style={{ backgroundColor: config.bgColor, color: config.fontColor }}>
            <div>{config.name}</div>
            <div>@{config.teacher}</div>
            <div>{config.position}</div>
          </div>
        )
      } else {
        return (
          <div className='item' style={{ backgroundColor: "#F4F5F5", color: "#C0C0BF" }}>
            <div>{config.name}</div>
            <div>@{config.teacher}</div>
            <div>{config.position}</div>
          </div>
        )
      }
    } else {
      return (
        <div className='item'>

        </div>
      )
    }


  }
}
