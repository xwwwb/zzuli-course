import React, { Component } from 'react'
import Item from '../item'
// 这里是下午的课表
export default class index extends Component {
  render() {
    return (
      <>
      <div className="morn">
        <div>第三节</div>
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
      <div className="morn">
      <div>第四节</div>
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
