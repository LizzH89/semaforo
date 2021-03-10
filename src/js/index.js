//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import PropTypes from "prop-types";

//add the styles here

///////////////////////wraping//////////////////////////////////////////////////

class Lizzie extends React.Component {
	constructor() {
		super();
		this.state = {
			theOne: null
		};
	}

	render() {
		console.log(this.state);
		let A;
		let B;
		let C;
		if (this.state.theOne == "Rojo") A = "selected"; //esto para poder concatenar y que si se le hace click quede como "Rojo selected"
		if (this.state.theOne == "Naranja") B = "selected";
		if (this.state.theOne == "Verde") C = "selected";

		return (
			<div className="Todo">
				<div
					className={"Rojo " + A}
					onClick={() => this.setState({ theOne: "Rojo" })}>
					<i className="fas fa-circle"></i>
				</div>
				<div
					className={"Naranja " + B}
					onClick={() => this.setState({ theOne: "Naranja" })}>
					<i className="fas fa-circle"></i>
				</div>
				<div
					className={"Verde " + C}
					onClick={() => this.setState({ theOne: "Verde" })}>
					<i className="fas fa-circle"></i>
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<Lizzie />, document.querySelector("#app"));
