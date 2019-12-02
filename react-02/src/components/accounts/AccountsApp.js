import React, { Component } from 'react';
import CreateAccountForm from './CreateAccountForm';
import AccountCard from './AccountCard';
import { AccountController } from './account.js'

class AccountsApp extends Component {
  constructor() {
    super();

    this.state = {
      accountController: new AccountController()
    }
    this.state.accountController = new AccountController();
  }

  addAccount = (inputs) => {
    const { nameInput, startingBalanceInput } = inputs;
    this.state.accountController.createAccount(nameInput, startingBalanceInput)

    // Should copy instead for immutability
    const controllerUpdate = this.state.accountController

    this.setState({
      accountController: controllerUpdate
    });
    if (this.state.accountController.accountArray.length > 1) {
      document.getElementById("idReports").classList.remove("hidden");
    }
  }

  renderCards = () => {
    return this.state.accountController.accountArray.map(account => {
      return <AccountCard key={account.name} name={account.name} startingBalance={account.currentBalance} account={account} />
    })
  }


  render() {
    const cards = this.renderCards();

    return (
      <div id="idGridContainer">
        <div id="idSummaryPanel">
          <h2 className="subheading">Account Summary</h2>

          <CreateAccountForm onSubmit={this.addAccount} />

          <div id="idReports" className="hidden" > {/*add logic for hidden className*/}
            <h3>Report</h3>
            <span>Total Balance: </span><span id="idTotal"></span><br />
            <span>Most Valuable: </span><span id="idMost"></span><br />
            <span>Least Valuable: </span><span id="idLeast"></span><br />
          </div>
        </div>

        <div id="idCardPanel">
          <h2>Accounts</h2>
          {cards}

        </div>
      </div>
    );
  }
}

export default AccountsApp;