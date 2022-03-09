import React, { Component } from "react"
import "./index.css"
import Item from "../item"
// 这里是上午的课表
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
				<div className="morn">
				<div>第二节</div>
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
