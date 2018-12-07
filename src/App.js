import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Heading from './components/heading';
import Profile from './components/profile';
import Carousel from './components/carousel';
import Navbar from './components/navbar';
import Subscribe from './components/subscribe';
import './grid.css';


class App extends Component {
  render() {
    return (
		<div className="App">
			<Navbar/>
			<Carousel/>
			<Profile/>
			<Subscribe/>
		</div>
		
    );
  }
}

export default App;
