import React, { Component } from "react"
import Section from "../section"

export default class Main extends Component {
	state = {
		weekCount: 18,
		nowWeek: 6,
		handling: -1
	}
	myRef = React.createRef()

	componentDidMount() {
		// 这里的宽度显示980 很奇怪
		this.myRef.current.scrollLeft = (this.state.nowWeek - 1) * (document.body.clientWidth)
	}
	handleScroll = (e) => {

		let pageWitdh = document.body.clientWidth
		let nowWeek = ((this.myRef.current.scrollLeft / pageWitdh) + 1).toFixed(0)
		if (nowWeek !== this.state.handling) {
			console.log("切换啦")
			this.setState({ handling: nowWeek })
			this.props.handleWeekChanges(nowWeek)
		}
	}

	render() {

		let items = []
		for (let i = 0; i < this.state.weekCount; i++) {
			items.push(<Section key={i} week={i + 1} />)
		}
		return (
			<>
				<div id="main" ref={this.myRef} onScroll={this.handleScroll} >
					{items}
				</div>
			</>

		)
	}
}
