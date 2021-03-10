//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import PropTypes from "prop-types";

//add the styles here

///////////////////////wraping//////////////////////////////////////////////////

function Contador(props) {
	return (
		<div className="primero">
			<div className="reloj">
				<i className="fas fa-clock"></i>
			</div>
			<div className="byte4">{props.tCuatro}</div>
			<div className="byte3">{props.tTres}</div>
			<div className="byte2">{props.tDos}</div>
			<div className="byte1">{props.tUno}</div>
			<div className="byte0">{props.tZero}</div>
		</div>
	); //este es el del main
}

Contador.propTypes = {
	tCuatro: PropTypes.number,
	tTres: PropTypes.number,
	tDos: PropTypes.number,
	tUno: PropTypes.number,
	tZero: PropTypes.number
};

let counter = 0; //Counter va a ser la variable que le vamos a aumentar ++ cada vez
setInterval(function() {
	let cuatro = Math.floor(counter / 10000);
	let tres = Math.floor(counter / 1000);
	let dos = Math.floor(counter / 100);
	let uno = Math.floor(counter / 10);
	let zero = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Contador
			tZero={zero % 10}
			tUno={uno % 10}
			tDos={dos % 10}
			tTres={tres % 10}
			tCuatro={cuatro % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);
