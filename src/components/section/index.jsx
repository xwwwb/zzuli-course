import React, { Component } from 'react'
import './index.css'
import Divider from '../divider'
import Week from '../week'
import Morning from '../morning'
import Afternoon from '../afternoon'
import Night from '../night'
// 这里存的是横版翻页的每一页
export default class Section extends Component {
  render() {
    return (
      <div className="section">
          <Week/>
          <Morning/>
          <Divider text="午休"/>
          <Afternoon/>
          <Divider text="晚修"/>
          <Night/>
        </div>
    )
  }
}
