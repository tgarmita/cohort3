import React, { Component } from 'react';
import './CitiesApp.css';
import CreateCityForm from './CreateCityForm';
import CityPoint from './CityPoint.js';
import { Community } from './cities.js'

class CitiesApp extends Component {
  constructor() {
    super();
    this.state = {
      totalPopulation: "",
      mostNorthern: "",
      mostSouthern: "",
      message: ""
    }
    this.province = new Community([]);
  }

  addCity = (inputs) => {
    // const { nameInput, startingBalanceInput } = inputs;
    let errorMessage;

    // if (!nameInput) {
    //   errorMessage = "Please enter an city name.";
    // } else {
    //   errorMessage = this.province.createcity(nameInput, startingBalanceInput)
    // }

    this.setState({
      message: errorMessage
    });
    this.calcReport();
  }

  removeCity = (key) => {
    this.province.removecity(key);
    this.calcReport();
  }

  calcReport = () => {
    this.setState({
      totalPopulation: ""
    });

    if (this.province.cityList.length > 1) {
      // document.getElementById("idCityReport").classList.remove("hidden");

      const totalPopulationUpdate = this.province.getPopulation();
      const mostNorthernUpdate = this.province.getMostNorthern().name;
      const mostSouthernUpdate = this.province.getMostSouthern().name;

      this.setState({
        totalPopulation: totalPopulationUpdate,
        mostNorthern: mostNorthernUpdate,
        mostSouthern: mostSouthernUpdate
      });
    } else {
      document.getElementById("idCityReport").classList.add("hidden");
    }
  }

  // renderPoints= () => {
  //   return this.province.cityList.map(city => {
  //     return <cityPoint key={city.name} name={city.name} startingBalance={city.currentBalance} city={city} calcReport={this.calcReport} removecity={this.removecity} />
  //   })
  // }

  render() {
    return (
      <div id="idGridContainer">
        <div id="idSummaryPanel">
          <h2 className="subheading">Community Manager</h2>

          <CreateCityForm onSubmit={this.addCity} message={this.state.message} />

          <div id="idCityReport" className="hidden">
            <h3>Report</h3>
            <span>Total Population: </span><span>{this.state.totalPopulation}</span><br />
            <span>Most Northern: </span><span>{this.state.mostValuable}</span><br />
            <span>Most Southern: </span><span>{this.state.leastValuable}</span><br />
          </div>
        </div>

        <div id="idMapPanel">
          <h2>Alberta Map</h2>
          {/* <span id="idFetchError"></span> */}

          <div className="map bgimg">
            <svg id="idSVG" width="330" height="550">
              {/* <circle cx="50" cy="50" r="7" stroke="black" stroke-width="1" fill="orange" /> */}
              {/* {this.renderPoints()} */}
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