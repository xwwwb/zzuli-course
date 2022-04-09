import React, { Component } from 'react'
import { Plus } from '@react-vant/icons';
import './index.css'
export default class AddButton extends Component {
  render() {
    return (
      <div className='add'><Plus fontSize="60px" color="#5578EA" /></div>
    )
  }
}
