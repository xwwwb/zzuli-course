import React, { Component } from "react"
import Item from "../item"
// 这里是上午的课表
export default class index extends Component {
	render() {
		return (
			<>
				<div className="line">
					<div className="sideBar">
					<div>1</div>
					<div>08:00</div>
					<div>09:40</div>
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
					<div>
						<Item />
					</div>
				</div>
	
			</>
		)
	}
}
