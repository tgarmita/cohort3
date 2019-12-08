import React, { Component } from 'react';

class CityPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
    }
  }

  coordinateConverter = (y, x) => {
    const lat = 275 - (y - 54.5) * 50;
    const long = 165 + (x + 115) * 33;
    return [lat, long];
  }

  render() {
    const [lat, long] = this.coordinateConverter(this.state.city.lat, this.state.city.long);
    return (
      <>
      <circle
        cx={long}
        cy={lat}
        r="7"
        stroke="black"
        strokeWidth="1"
        fill="orange" />

      <text x={long + 10} y={lat - 10}>{this.state.city.name}</text>
      </>
    );
  }
}

export default CityPoint;