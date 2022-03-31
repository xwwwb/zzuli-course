import React, { Component } from "react"
import Section from "../section"
export default class Main extends Component {
	state = {
		weekCount: 18,
		nowWeek: 6,
	}

	componentDidMount() {
		let url = "#" + this.state.nowWeek
		window.location.href = url;
	}


	render() {

		let items = []
		for (let i = 0; i < this.state.weekCount; i++) {
			items.push(<Section key={i} week={i + 1} />)
		}
		return (
			<>
				<div id="main">
					{items}
				</div>
			</>

		)
	}
}
