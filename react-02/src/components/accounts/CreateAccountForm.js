import React, { Component } from 'react';
import './AccountsApp.css';

class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      balanceInput: ""
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault(event);
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <div className="form">
        <h3>Create New Account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Account Name:
            <input
              name="nameInput"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <label>Initial Balance:
            <span className="input-symbol-dollar">
              <input className="amount-input-dollar"
                name="balanceInput"
                onChange={this.handleInputChange}
                type="number"
                min="0"
                step="0.01" />
            </span>
          </label>
          <button>Add Account</button><br /><br />
          <span id="idAccountMessage"></span>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;