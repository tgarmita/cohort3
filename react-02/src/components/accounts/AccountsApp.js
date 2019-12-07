import React, { Component } from 'react';
import './AccountsApp.css';
import CreateAccountForm from './CreateAccountForm';
import AccountCard from './AccountCard';
import { AccountController } from './account.js'

class AccountsApp extends Component {
  constructor() {
    super();
    this.state = {
      totalBalance: "",
      mostValuable: "",
      leastValuable: "",
      message: ""
    }
    this.accountController = new AccountController();
  }

  addAccount = (inputs) => {
    const { nameInput, startingBalanceInput } = inputs;
    let errorMessage;

    if (!nameInput) {
      errorMessage = "Please enter an account name.";
    } else {
      errorMessage = this.accountController.createAccount(nameInput, startingBalanceInput)
    }

    this.setState({
      message: errorMessage
    });
    this.calcReport();
  }

  removeAccount = (accountName) => {
    this.accountController.removeAccount(accountName);
    this.calcReport();
  }

  calcReport = () => {
    this.setState({
      totalBalance: ""
    });

    if (this.accountController.accountArray.length > 1) {
      document.getElementById("idReport").classList.remove("hidden");

      const totalBalanceUpdate = this.accountController.totalAccounts();
      const mostValuableUpdate = this.accountController.mostValuableAccount().name;
      const leastValuableUpdate = this.accountController.leastValuableAccount().name;

      this.setState({
        totalBalance: totalBalanceUpdate,
        mostValuable: mostValuableUpdate,
        leastValuable: leastValuableUpdate
      });
    } else {
      document.getElementById("idReport").classList.add("hidden");
    }
  }

  renderCards = () => {
    return this.accountController.accountArray.map(account => {
      return <AccountCard key={account.name} name={account.name} startingBalance={account.currentBalance} account={account} calcReport={this.calcReport} removeAccount={this.removeAccount} />
    })
  }

  render() {
    return (
      <div id="idGridContainer">
        <div id="idSummaryPanel">
          <h2 className="subheading">Account Summary</h2>

          <CreateAccountForm onSubmit={this.addAccount} message={this.state.message} />

          <div id="idReport" className="hidden">
            <h3>Report</h3>
            <span>Total Balance: </span><span id="idTotal">{this.state.totalBalance}</span><br />
            <span>Most Valuable: </span><span id="idMost">{this.state.mostValuable}</span><br />
            <span>Least Valuable: </span><span id="idLeast">{this.state.leastValuable}</span><br />
          </div>
        </div>

        <div id="idCardPanel">
          <h2>Accounts</h2>
          {this.renderCards()}

        </div>
      </div>
    );
  }
}

export default AccountsApp;