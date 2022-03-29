import React, { Component } from "react"
import Item from "../item"

export default class index extends Component {

	render() {
		const { week, time, courseCount, time_1, time_2 } = this.props
		let items = []
		for (let i = 0; i < 5; i++) {
			items.push(<div key={i}><Item week={week} time={time} day={i + 1} /></div>)
		}

		return (
			<>
				<div className="line">
					<div className="sideBar">
						<div>{courseCount}</div>
						<div>{time_1}</div>
						<div>{time_2}</div>
					</div>
					{items}
				</div>

			</>
		)
	}
}
