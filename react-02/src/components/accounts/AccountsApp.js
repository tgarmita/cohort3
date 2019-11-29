import React, { Component } from 'react';
import CreateAccountForm from './CreateAccountForm';
import AccountCard from './AccountCard';
import { AccountController } from './account.js'

class AccountsApp extends Component {
  constructor() {
    super();

    this.state = {
      accountList: []
    }

    this.banker = new AccountController();
  }

  addAccount = (inputs) => {
    const { nameInput, balanceInput } = inputs;
    console.log(inputs)
    this.banker.createAccount(nameInput, balanceInput)
    console.log(this.banker.accountArray)
    this.setState({
      accountList: this.banker.accountArray
    });
    if (this.banker.getAccounts().length > 1) {
      document.getElementById("idReports").classList.remove("hidden");
    }
  }


  renderCards = () => {
    return this.state.accountList.map(account => {
      return <AccountCard key={account.name} name={account.name} balance={account.balance} />
    })
  }


  render() {
    const cards = this.renderCards();
    console.log(cards)

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