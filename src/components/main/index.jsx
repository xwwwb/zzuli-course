import React, { Component } from "react"
import Section from "../section"
import PopupForm from '../popup'
import AddButton from "../add"
export default class Main extends Component {
	state = {
		weekCount: 18,
		nowWeek: 9,
		showPopup: false,
		showWeek: null
	}

	openPopup = () => {
		this.setState({
			showPopup: true
		})
		this.updateShowWeek()
	}
	closePopup = () => {
		this.setState({
			showPopup: false
		})
	}

	componentDidMount() {
		console.log("componentDidMount")
		let url = "#" + this.state.nowWeek
		window.location.href = url;
		console.log("build data: 2022-4-5 22:08:00")
		console.log("@xwwwb")

	}

	updateShowWeek = () => {
		let url = window.location.href
		let week = url.split("#")[1]
		this.setState({
			showWeek: week
		})
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
				<PopupForm showPopup={this.state.showPopup} closePopup={this.closePopup} showWeek={this.state.showWeek} />
				<AddButton />
			</>

		)
	}
}
