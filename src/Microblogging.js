import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import './grid.css';

class Microblogging extends Component {
  render() {
    return (
		<div className="Microblogging">
			<Navbar/>
		</div>
		
    );
  }
}

export default Microblogging;
