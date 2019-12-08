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
      fetchMessage: ""
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

  renderPoints = () => {
    return this.province.cityList.map(city => {
      return <CityPoint key={city.key} city={city} calcReport={this.calcReport} removeCity={this.removeCity} />
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
          <h2>Alberta Map</h2>
          <span id="idFetchError">{this.state.fetchMessage}</span>

          <div className="map bgimg">
            <svg id="idSVG" width="330" height="550">
              {/* <circle cx="50" cy="50" r="7" stroke="black" stroke-width="1" fill="orange" /> */}
              {this.renderPoints()}
            </svg>
          </div>

          <h4 id="idSelectedCity">Select City</h4>

          <div id="idCityTools" className="hidden">
            <button type='button' id="idShow">Show Details</button>
            <button type='button' id="idHowBig">Classification</button>
            <button type='button' id="idWhichSphere">Which Sphere?</button>
            <button type='button' id="idDelete">Delete City</button><br />
            <label>Pop Change:
                    <input id="idPopChange" type="number" min="0" />
            </label>
            <button type='button' id="idMovedIn">Moved In</button>
            <button type='button' id="idMovedOut">Moved Out</button><br />
            <span id="idCityMessage"></span>
          </div>

        </div>
      </div>
    );
  }
}

export default CitiesApp;