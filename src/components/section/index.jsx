import React, { Component } from 'react'
import './index.css'
import Divider from '../divider'
import Week from '../week'
import Line from '../line'
// 这里存的是横版翻页的每一页
export default class Section extends Component {
  render() {
    return (
      <div className="section">
        <Week />
        <Line week={this.props.week} time={1} />
        <Line week={this.props.week} time={3} />
        <Divider text="午休" />
        <Line week={this.props.week} time={5} />
        <Line week={this.props.week} time={7} />
        <Divider text="晚修" />
        <Line week={this.props.week} time={9} />
      </div>
    )
  }
}
