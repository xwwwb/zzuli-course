import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  render() {
    return (
      <div className='divider'>{this.props.text}</div>
    )
  }
}
