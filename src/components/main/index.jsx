import React, { Component } from "react"
import Section from "../section"
export default class Main extends Component {
	render() {
		return (
			<div id="main">
				<Section>内容一</Section>
				<Section>内容二</Section>
				<Section>内容三</Section>
				<Section>内容四</Section>
			</div>
		)
	}
}
