import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.svg';
import communityIcon from './images/community.svg';
import tictactoeIcon from './images/tic-tac-toe.svg';
import bankIcon from './images/piggy-bank.svg';

import Icon from './components/Icon';
import Starter from './components/starter/Starter';
import Game from './components/tictactoe/Game';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    }

    this.style = { backgroundColor: '#d4bea7' };
    this.icons = [logo, tictactoeIcon, communityIcon, bankIcon];
  }

  onSelect = (event) => {
    console.log(event.target.name)
    this.setState({
      selected: event.target.name
    });
  }

  renderIcons = () => {
    return this.icons.map((icon, i) => {
      return <Icon key={icon} name={icon} image={icon} style={this.state.selected === icon ? this.style : null} onClick={this.onSelect} />
    })
  }

  showPage = () => {
    if (this.state.selected === logo) return <Starter />;
    if (this.state.selected === tictactoeIcon) return <Game />;
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          {this.renderIcons}
        </nav>
        {this.showPage}
      </div>
    );
  }
}


export default App;
