import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Icon from './components/Icon';
import Starter from './components/starter/Starter';
import Game from './components/tictactoe/Game';
import AccountsApp from './components/accounts/AccountsApp';
import CitiesApp from './components/cities/CitiesApp';
import LinkedListApp from './components/linked-list/LinkedListApp';
import FifoLifoApp from './components/fifo-lifo/FifoLifoApp';
import Settings from './components/settings/Settings';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Icon renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Icon />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Starter renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Tic-tac-toe renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('AccountsApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CitiesApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CitiesApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LinkedListApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinkedListApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FifoLifoApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FifoLifoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Settings renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Settings />, div);
  ReactDOM.unmountComponentAtNode(div);
});









