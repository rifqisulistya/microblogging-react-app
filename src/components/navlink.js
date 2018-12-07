import React from 'react'
import { Link } from 'react-router'

class Navlink extends React.Component {
  render() {
    return (
		<Link {...this.props} activeClassName="active"/>
		
    );
  }
}

export default Navlink;
