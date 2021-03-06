import React, { Component } from 'react';
import { AppContext } from '../../context';

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

    this.setState({
      updateBalanceInput: ""
    });
    this.props.calcReport();
  }

  handleWithdraw = () => {
    this.state.account.withdraw(this.state.updateBalanceInput);

    this.setState({
      updateBalanceInput: ""
    });
    this.props.calcReport();
  }

  handleDelete = event => {
    this.props.removeAccount(this.state.account.name)
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => (
          <div className="card" id="idPrimaryCard" style={{ backgroundColor: value.card }} >
            <h3>{this.state.account.name} Account</h3><br />
            <label>Amount:
          <span className="input-symbol-dollar"><input className="amount-input-dollar"
                type="number"
                value={this.state.updateBalanceInput}
                onChange={this.handleInputChange}
                min="0"
                step="0.01" />
              </span>
              <span>Balance: $</span><span id="idBalance">{this.state.account.currentBalance}</span><br />
            </label>
            <input type="button" value="Deposit" onClick={this.handleDeposit} />
            <input type="button" value="Withdraw" onClick={this.handleWithdraw} />
            <input className="delete-button" type="button" value="×" onClick={this.handleDelete} />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AccountCard;