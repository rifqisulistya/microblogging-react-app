import React from 'react';
import { Link } from 'react-router'
import Navlink from './navlink'

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (			
			<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a class="navbar-brand" href="#">Rifqi</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#profile">Profile</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#aboutme">About Me</a>
						</li>
						<li class="nav-item">
							<Navlink to="/microblogging">Microblogging</Navlink>
						</li>						
					</ul>
					<form class="form-inline mt-2 mt-md-0">
						<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
						<button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>	
		);
	}
}	
export default Navbar;