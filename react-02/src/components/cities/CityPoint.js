import React, { Component } from 'react';

class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        account: this.props.account,
        updateBalanceInput: ""
      }
  }

  handleInputChange = event => {
    this.setState({
      updateBalanceInput: event.target.value
    });
  }

  handleDeposit = () => {
    this.state.account.deposit(this.state.updateBalanceInput);

    const accountUpdate = this.state.account;
    this.setState({
      account: accountUpdate,
      updateBalanceInput: ""
    });
    this.props.calcReport();
  }

  handleWithdraw = () => {
    this.state.account.withdraw(this.state.updateBalanceInput);

    const accountUpdate = this.state.account;
    this.setState({
      account: accountUpdate,
      updateBalanceInput: ""
    });
    this.props.calcReport();
  }

  handleDelete = event => {
    this.props.removeAccount(this.state.account.name)
  }
  
  render() {
    return (
      <div className="card" id="idPrimaryCard">
        <h3>{this.props.name} Account</h3><br/>
        <label>Amount:
          <span className="input-symbol-dollar"><input className="amount-input-dollar" 
          type="number"
          value={this.state.updateBalanceInput}
          onChange={this.handleInputChange}
          min="0"
          step="0.01"/>
          </span>
          <span>Balance: $</span><span id="idBalance">{this.state.account.currentBalance}</span><br/>
        </label>
        <input type="button" value="Deposit" onClick={this.handleDeposit}/>
        <input type="button" value="Withdraw" onClick={this.handleWithdraw}/>
        <input className="delete-button" type="button" value="×" onClick={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountCard;