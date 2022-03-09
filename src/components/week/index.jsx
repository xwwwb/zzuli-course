import React, { Component } from "react"
import "./index.css"
// 这里是头部显示星期的地方
export default class index extends Component {
	render() {
		return (
			<div className="week">
				<div></div>
				<div>周一</div>
				<div>周二</div>
				<div>周三</div>
				<div>周四</div>
				<div>周五</div>
			</div>
		)
	}
}
