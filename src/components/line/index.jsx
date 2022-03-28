import React, { Component } from "react"
import Item from "../item"

export default class index extends Component {

	render() {
		const { week, time } = this.props
		let items = []
		for (let i = 0; i < 5; i++) {
			items.push(<div key={i}><Item week={week} time={time} day={i + 1} /></div>)
		}
		return (
			<>
				<div className="line">
					<div className="sideBar">
						<div>1</div>
						<div>08:00</div>
						<div>09:40</div>
					</div>
					{items}
				</div>

			</>
		)
	}
}
