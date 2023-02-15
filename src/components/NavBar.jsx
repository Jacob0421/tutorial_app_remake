import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
	console.log("NavBar - Rendered");

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
			</div>
		</nav>
	);
};

export default NavBar;