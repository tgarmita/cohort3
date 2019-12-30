import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.svg';
import communityIcon from './images/community.svg';
import tictactoeIcon from './images/tic-tac-toe.svg';
import bankIcon from './images/piggy-bank.svg';
import linkIcon from './images/breaking-chain.svg';
import stackIcon from './images/stack.svg';

import Icon from './components/Icon';
import Starter from './components/starter/Starter';
import Game from './components/tictactoe/Game';
import AccountsApp from './components/accounts/AccountsApp';
import CitiesApp from './components/cities/CitiesApp';
import LinkedListApp from './components/linked-list/LinkedListApp';
import FifoLifoApp from './components/fifo-lifo/FifoLifoApp';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: stackIcon
    }

    this.style = { backgroundColor: '#d4bea7' };
    this.icons = [logo, tictactoeIcon, bankIcon, communityIcon, linkIcon, stackIcon];
  }

  onSelect = (event) => {
  this.setState({
      selected: event.target.name
    });
  }

  
  renderIcons = () => {
    return this.icons.map((icon) => {
      return <Icon key={icon} name={icon} image={icon} style={this.state.selected === icon ? this.style : null} onClick={this.onSelect} />
    })
  }

  showPage = () => {
    if (this.state.selected === logo) return <Starter logo={logo}/>;
    if (this.state.selected === tictactoeIcon) return <Game />;
    if (this.state.selected === bankIcon) return <AccountsApp />;
    if (this.state.selected === communityIcon) return <CitiesApp />;
    if (this.state.selected === linkIcon) return <LinkedListApp />;
    if (this.state.selected === stackIcon) return <FifoLifoApp />;
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          {this.renderIcons()}
        </nav>

        {this.showPage()}
      </div>
    );
  }
}


export default App;
