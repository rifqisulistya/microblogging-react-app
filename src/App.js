import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Heading from './components/heading';
import Profilee from './components/profilee';
import Carousel from './components/carousel';
import Navbar from './components/navbar';
import Subscribe from './components/subscribe';
{/* import Gallery from './components/gallery'; */}





class App extends Component {
  render() {
    return (
		<div className="App">
			<Navbar/>
			<Carousel/>
			<Profilee/>
			<Subscribe/>
			{/* <Gallery/> */}
		</div>
		
    );
  }
}

export default App;
