import React, { Component } from 'react';

class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      startingBalanceInput: ""
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
    this.setState({
      nameInput: "",
      startingBalanceInput: ""
    })
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
              value={this.state.nameInput}
              onChange={this.handleInputChange} />
          </label>
          <label>Initial Balance:
            <span className="input-symbol-dollar">
              <input className="amount-input-dollar"
                name="startingBalanceInput"
                type="number"
                value={this.state.startingBalanceInput}
                onChange={this.handleInputChange}
                min="0"
                step="0.01" />
            </span>
          </label>
          <button>Add Account</button><br /><br />
          <p id="idAccountMessage">{this.props.message}</p>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;