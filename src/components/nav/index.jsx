import React, { Component } from 'react'
import './index.css'

export default class Nav extends Component {
  handleClick = () => {

  }
  render() {
    return (
      <>
        <div id="nav" onClick={this.handleClick}>第{this.props.weekCount}周</div>
      </>
    )
  }
}
