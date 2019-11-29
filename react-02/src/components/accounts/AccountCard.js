import React, { Component } from 'react';

class AccountCard extends Component {
  constructor() {
    super();
    this.state = {
        balance: 0
      }
  }

  render() {
    return (
      <div className="card" id="idPrimaryCard">
        <h3>{this.props.name}</h3><br/>
        <label>Amount:
          <span className="input-symbol-dollar"><input className="amount-input-dollar" type="number" min="0"
            step="0.01"/></span>
          <span>Balance: $</span><span id="idBalance">{this.state.balance}</span><br/>
        </label>
        <input type="button" value="Balance"/>
        <input id="idDeposit" type="button" value="Deposit"/>
        <input id="idWithdraw" type="button" value="Withdraw"/>
      </div>
    );
  }
}

export default AccountCard;