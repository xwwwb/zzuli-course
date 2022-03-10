import React, { Component } from 'react'
import Item from '../item'
export default class index extends Component {
  render() {
    return (
      <>
      <div className="morn">
        <div>第一节</div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
        <div>
          <Item />
        </div>
      </div>
    </>
    )
  }
}
