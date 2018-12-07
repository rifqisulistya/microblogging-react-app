// header.js
import React from 'react';
import Heading from './heading';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <header className="header">
        <Heading></Heading>
      </header>
    );
  }
}

export default Header;