import React, { Component } from 'react';
import './App.css';
import starterIcon from './images/logo_black.svg';
import communityIcon from './images/community.svg';
import tictactoeIcon from './images/tic-tac-toe.svg';
import bankIcon from './images/piggy-bank.svg';
import linkIcon from './images/breaking-chain.svg';
import stackIcon from './images/stack.svg';
import settingIcon from './images/settings-knobs.svg';

import Icon from './components/Icon';
import Starter from './components/starter/Starter';
import Game from './components/tictactoe/Game';
import AccountsApp from './components/accounts/AccountsApp';
import CitiesApp from './components/cities/CitiesApp';
import LinkedListApp from './components/linked-list/LinkedListApp';
import FifoLifoApp from './components/fifo-lifo/FifoLifoApp';
import Settings from './components/settings/Settings';
import { AppContext, themes } from './context';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: starterIcon,
      theme: themes.day
    }
    this.icons = [starterIcon, tictactoeIcon, bankIcon, communityIcon, linkIcon, stackIcon, settingIcon];
  }

  toggleTheme = (theme) => {
    this.setState({
      theme: themes[theme]
    });
  }

  onSelect = (event) => {
    this.setState({
      selected: event.target.name
    });
  }

  renderIcons = () => {
    return this.icons.map((icon) => {
      return <Icon key={icon} name={icon} image={icon} style={this.state.selected === icon ? { backgroundColor: this.state.theme.icon } : null} onClick={this.onSelect} />
    })
  }

  showPage = () => {
    if (this.state.selected === starterIcon) return <Starter />;
    if (this.state.selected === tictactoeIcon) return <Game />;
    if (this.state.selected === bankIcon) return <AccountsApp />;
    if (this.state.selected === communityIcon) return <CitiesApp />;
    if (this.state.selected === linkIcon) return <LinkedListApp />;
    if (this.state.selected === stackIcon) return <FifoLifoApp />;
    if (this.state.selected === settingIcon) return <Settings changeTheme={this.toggleTheme} />;
  }

  render() {
    return (
        <AppContext.Provider value={this.state.theme}>
          <nav className="nav" style={{ backgroundColor: this.state.theme.nav }}>
            {this.renderIcons()}
          </nav>
          <div className="App" style={{ backgroundColor: this.state.theme.background, color: this.state.theme.text }}>
            {this.showPage()}
          </div>
        </AppContext.Provider>
    );
  }
}

export default App;
