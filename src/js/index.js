//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import PropTypes from "prop-types";

//add the styles here
export const Bar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="nav navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
					<li className="nav-item">
						<a
							className="nav-link disabled"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				TThis is a simple page to show our love respect and devotion to
				this incredible artist.
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://www.youtube.com/watch?v=4go_DzY8wHc"
				role="button">
				New Video !
			</a>
		</div>
	);
};

const BootstrapCard = props => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.link}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.hablada}</p>
				<a href={props.link2} className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
	hablada: PropTypes.string,
	label: PropTypes.string,
	link2: PropTypes.string
};

///////////////////////wraping//////////////////////////////////////////////////

const Homie = () => {
	return (
		<div>
			<Bar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-center">
					<BootstrapCard
						title="Brandon Flowers"
						link="https://pbs.twimg.com/profile_images/571348150749642752/jviz2VGk.jpeg"
						hablada="Brandon Richard Flowers (born June 21, 1981) is an American musician, best known as the lead singer and keyboardist of the Las Vegas-based rock band The Killers."
						label="Click me for more"
						link2="https://en.wikipedia.org/wiki/Brandon_Flowers"
					/>
					<BootstrapCard
						title="Brandon Flowers"
						link="https://pbs.twimg.com/profile_images/571348150749642752/jviz2VGk.jpeg"
						hablada="Brandon Richard Flowers (born June 21, 1981) is an American musician, best known as the lead singer and keyboardist of the Las Vegas-based rock band The Killers."
						label="Click me for more"
						link2="https://en.wikipedia.org/wiki/Brandon_Flowers"
					/>
					<BootstrapCard
						title="Brandon Flowers"
						link="https://pbs.twimg.com/profile_images/571348150749642752/jviz2VGk.jpeg"
						hablada="Brandon Richard Flowers (born June 21, 1981) is an American musician, best known as the lead singer and keyboardist of the Las Vegas-based rock band The Killers."
						label="Click me for more"
						link2="https://en.wikipedia.org/wiki/Brandon_Flowers"
					/>
					<BootstrapCard
						title="Brandon Flowers"
						link="https://pbs.twimg.com/profile_images/571348150749642752/jviz2VGk.jpeg"
						hablada="Brandon Richard Flowers (born June 21, 1981) is an American musician, best known as the lead singer and keyboardist of the Las Vegas-based rock band The Killers. "
						label="Click me for more"
						link2="https://en.wikipedia.org/wiki/Brandon_Flowers"
					/>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<Homie />, document.querySelector("#app"));
