import React, { Component } from 'react'
import './index.css'
export default class Nav extends Component {

  render() {
    return (
      <div id="nav">第{this.props.weekCount}周</div>
    )
  }
}
