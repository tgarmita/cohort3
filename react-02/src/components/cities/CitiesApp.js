import React, { Component } from 'react';
import './CitiesApp.css';
import CreateCityForm from './CreateCityForm';
import CityPoint from './CityPoint.js';
import { Community } from './cities.js';
import serverFunctions from './serverFunctions.js'

class CitiesApp extends Component {
  constructor() {
    super();
    this.state = {
      totalPopulation: "",
      mostNorthern: "",
      mostSouthern: "",
      formMessage: "",
      fetchMessage: "",
      updatePopInput: "",
      selectedCity: {}
    }
    this.province = new Community([]);
  }

  componentDidMount = async () => {
    const errorMessage = await serverFunctions.loadData(this.province);
    if (errorMessage) {
      this.setState({
        fetchMessage: errorMessage
      });
    } else if (this.province.cityList.length < 1) {
      this.setState({
        fetchMessage: "Warning: Server database is empty."
      });
    } else {
      this.calcReport()
    }
  }

  addCity = async (inputs) => {
    const { nameInput, latInput, longInput, popInput } = inputs;

    if (!nameInput) {
      this.setState({
        formMessage: "Please enter a city name."
      });
    } else {
      this.setState({
        formMessage: ""
      });
      const key = this.province.getHighestKey() + 1; //change to key counter in server? key #0?
      const newCity = this.province.createCity(key, nameInput, latInput, longInput, popInput)

      const errorMessage = await serverFunctions.addData(newCity);
      if (errorMessage) {
        // province.deleteCity(key); // maybe copy controller and revert instead?
        this.setState({
          fetchMessage: errorMessage
        });
      } else {
        this.calcReport();
      }
    }
  }

  removeCity = (key) => {
    this.province.removeCity(key);
    this.calcReport();
  }

  calcReport = () => {
    this.setState({
      totalPopulation: ""
    });

    if (this.province.cityList.length > 1) {
      document.getElementById("idCityReport").classList.remove("hidden");

      const mostNorth = this.province.getMostNorthern();
      const mostSouth = this.province.getMostSouthern();

      const totalPopulationUpdate = this.province.getPopulation();
      const mostNorthernUpdate = `${mostNorth.name} at ${mostNorth.lat} latitude`;
      const mostSouthernUpdate = `${mostSouth.name} at ${mostSouth.lat} latitude`;
      console.log(mostNorthernUpdate)
      this.setState({
        totalPopulation: totalPopulationUpdate,
        mostNorthern: mostNorthernUpdate,
        mostSouthern: mostSouthernUpdate
      });
    } else {
      document.getElementById("idCityReport").classList.add("hidden");
    }
  }

  onSelectPoint = event => {
    const selectedPointKey = Number(event.target.attributes.keyid.value);
    const newSelectedCity = this.province.getCity(selectedPointKey);

    this.setState({
      selectedCity: newSelectedCity
    });
    document.getElementById("idCityTools").classList.remove("hidden");
  }

  renderPoints = () => {
    return this.province.cityList.map(city => {
      return <CityPoint
        key={city.key}
        keyID={city.key}
        city={city}
        calcReport={this.calcReport}
        removeCity={this.removeCity}
        classNames={this.state.selectedCity.key === city.key ? "city-points city-selected" : "city-points"}
        onClick={this.onSelectPoint} />
    })
  }

  render() {
    return (
      <div id="idGridContainer">
        <div id="idSummaryPanel">
          <h2 className="subheading">Community Manager</h2>

          <CreateCityForm onSubmit={this.addCity} message={this.state.formMessage} /><br />

          <div id="idCityReport" className="hidden">
            <h3>Report</h3>
            <span>Total Population: </span><span>{this.state.totalPopulation}</span><br />
            <span>Most Northern: </span><span>{this.state.mostNorthern}</span><br />
            <span>Most Southern: </span><span>{this.state.mostSouthern}</span><br />
          </div>
        </div>

        <div id="idMapPanel">
          <h2 className="subheading2">Alberta Map</h2>

          <div>
            <h3>City Tools</h3>
            <h4 id="idSelectedCity">{this.state.selectedCity.name || "Select City"}</h4>

            <div id="idCityTools" className="hidden">
              <button type='button' id="idShow">Show Details</button><br />
              <button type='button' id="idHowBig">Classification</button><br />
              <button type='button' id="idWhichSphere">Which Sphere?</button><br />
              <button type='button' id="idDelete">Delete City</button><br />
              <label>Pop Change:
          <input id="idPopChange" type="number" min="0" />
              </label>
              <button type='button' id="idMovedIn">Moved In</button>
              <button type='button' id="idMovedOut">Moved Out</button><br />
              <span id="idCityMessage"></span>
            </div>
          </div>

          <div>
            <span id="idFetchError">{this.state.fetchMessage}</span>

            <div className="map bgimg">
              <svg id="idSVG" width="330" height="550">
                {this.renderPoints()}
              </svg>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default CitiesApp;