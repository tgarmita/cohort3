import React, { Component } from 'react';
import logo from 'C:/code/cohort3/react-02/src/images/logo.svg';
import './Starter.css';


class Starter extends Component {
  render() {
    return (
      <header className="Starter-header" >
        <img src={logo} className="Starter-logo" alt="react-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
            </p>
        <a
          className="Starter-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            </a>
      </header>
    )
  }
}

export default Starter;