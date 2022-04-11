import React, { Component } from 'react'
import { Plus } from '@react-vant/icons';
import { Link } from 'react-router-dom';
import './index.css'
export default class AddButton extends Component {
  render() {
    return (
      <Link to="/setting"><div className='add'><Plus fontSize="30px" color="#5578EA" /></div></Link>
    )
  }
}
