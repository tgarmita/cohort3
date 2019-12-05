import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Icon from './components/Icon';
import Starter from './components/starter/Starter';
import Game from './components/tictactoe/Game';
import AccountsApp from './components/accounts/AccountsApp';
import CreateAccountForm from './components/accounts/CreateAccountForm';
import AccountCard from './components/accounts/AccountCard';

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

// it('AccountCard renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AccountCard />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('CreateAccountForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateAccountForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});




