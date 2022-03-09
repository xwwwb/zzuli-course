import React, { Component } from 'react'
import './index.css'
import Item from '../item'
import Week from '../week'
import Morning from '../morning'
import Afternoon from '../afternoon'
// 这里存的是横版翻页的每一页
export default class Section extends Component {
  render() {
    return (
      <div className="section">
          <Week/>
          <Morning/>
          <Afternoon/>
          
        </div>
    )
  }
}
