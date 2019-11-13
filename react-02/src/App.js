import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.svg';
import communityIcon from './images/community.svg';
import tictactoeIcon from './images/tic-tac-toe.svg';
import bankIcon from './images/piggy-bank.svg';

import Starter from './components/Starter';
import Icon from './components/Icon';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    }

    this.style = {backgroundColor: '#d4bea7'};
    this.icons = [logo, communityIcon, tictactoeIcon, bankIcon];
  }

  onSelect = (event) => {
    console.log(event.target.name)
    this.setState({
      selected: event.target.name
    });
  }

renderIcons = () => {
  return this.icons.map((icon, i) => <Icon key={i} name={icon} image={icon} style={this.state.selected === icon ? this.style : null} onClick={this.onSelect}/>)
}

render() {
  return (
    <div className="App">
      <nav className="nav">
        {this.renderIcons()}
      </nav>
      < Starter logo={logo} />

      {/* 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header> */}
    </div>
  );
}
}


export default App;
