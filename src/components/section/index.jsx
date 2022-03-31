import React, { Component } from 'react'
import './index.css'
import Divider from '../divider'
import Week from '../week'
import Line from '../line'
import Nav from '../nav'
// 这里存的是横版翻页的每一页
export default class Section extends Component {
  handleClick = () => {
    this.props.openPopup()
  }
  render() {
    return (
      <div className="section" >
        <div onClick={this.handleClick}>
          <Nav weekCount={this.props.week} id={this.props.week} />
        </div>
        <Week />
        <Line week={this.props.week} time={1} courseCount={1} time_1={"08:00"} time_2={"09:40"} />
        <Line week={this.props.week} time={3} courseCount={2} time_1={"10:00"} time_2={"11:40"} />
        <Divider text="午休" />
        <Line week={this.props.week} time={5} courseCount={3} time_1={"14:30"} time_2={"16.10"} />
        <Line week={this.props.week} time={7} courseCount={4} time_1={"16:30"} time_2={"18:10"} />
        <Divider text="晚修" />
        <Line week={this.props.week} time={9} courseCount={5} time_1={"19:30"} time_2={"21:10"} />
      </div>
    )
  }
}
