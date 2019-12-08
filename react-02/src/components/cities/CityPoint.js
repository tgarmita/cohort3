import React, { Component } from 'react';

class CityPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
    }
  }

  //build coordinate converter function

  render() {
    return (
      <circle cx="50" cy="50" r="7" stroke="black" strokeWidth="1" fill="orange" />
    );
  }
}

export default CityPoint;