import React, { Component } from 'react';

class CityTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      updatePopInput: "",
      details: "",
      classification: "",
      hemisphere: ""
    }
  }

  componentDidMount = () => {
    this.calcCityInfo();
  }

  //I don't think this is ideal - and not working correctly
  componentDidUpdate(prevProps) {
    console.log(this.state.city.key)
    console.log(this.props.city.key)
    console.log(prevProps.city.key)
    //Typical usage, don't forget to compare the props
    if (this.props.city.key !== prevProps.city.key) {
      this.calcCityInfo();

      this.setState({
        city: this.props.city
      })
    }
   }
  

  calcCityInfo = () => {
    const detailsUpdate = this.state.city.show();
    const classificationUpdate = this.state.city.howBig();
    const hemisphereUpdate = this.state.city.whichSphere();

    this.setState({
      details: detailsUpdate,
      classification: classificationUpdate,
      hemisphere: hemisphereUpdate
    });
  }

  render() {
    return (
      <div id="idCityTools">
        <p style={{whiteSpace: "pre-wrap"}}>{this.state.details}</p><br />
        <span>Classification: </span><span>{this.state.classification}</span><br />
        <span>Hemisphere: </span><span>{this.state.hemisphere}</span><br />
        
        <label>Pop Change:
          <input id="idPopChange" type="number" min="0" />
        </label>
        <button type='button' id="idMovedIn">Moved In</button>
        <button type='button' id="idMovedOut">Moved Out</button><br />
        <button type='button' id="idDelete">Delete City</button><br />
        <span id="idCityMessage"></span>
      </div>
    );
  }
}

export default CityTools;







