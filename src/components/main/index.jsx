import React, { Component } from "react"
import Section from "../section"
import PopupForm from '../popup'
export default class Main extends Component {
	state = {
		weekCount: 18,
		nowWeek: 6,
		showPopup: false
	}

	openPopup = () => {
		this.setState({
			showPopup: true
		})
	}
	closePopup = () => {
		this.setState({
			showPopup: false
		})
	}

	componentDidMount() {
		let url = "#" + this.state.nowWeek
		window.location.href = url;
	}


	render() {
		let items = []
		for (let i = 0; i < this.state.weekCount; i++) {
			items.push(<Section key={i} week={i + 1} openPopup={this.openPopup} closePopup={this.closePopup} />)
		}
		return (
			<>
				<div id="main">
					{items}
				</div>
				<PopupForm showPopup={this.state.showPopup} closePopup={this.closePopup} />
			</>

		)
	}
}
