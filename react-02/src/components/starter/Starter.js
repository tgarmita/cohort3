import React, { Component } from 'react';
import './Starter.css';



class Starter extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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