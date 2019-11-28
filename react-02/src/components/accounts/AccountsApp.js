import React, { Component } from 'react';
import CreateAccountForm from './CreateAccountForm';
import AccountCard from './AccountCard';
import { AccountController } from './account.js'

class AccountsApp extends Component {
  constructor() {
    super();

    //Update this state from pojo account controller somehow?
    this.state = {
      accountList: []
    }

    //Or why not just use property directly
    this.banker = new AccountController();
  }


  //Spiking....
  addAccount = (inputs) => {
    const {nameInput, balanceInput} = inputs;
    console.log(inputs)
    this.banker.createAccount(nameInput, balanceInput)
    console.log(this.banker.accountArray)
    this.setState({
      accountList: this.banker.accountArray
    });
    this.renderCards(); // I dont think this is needed
    }

  
    renderCards = () => {
    return this.state.accountList.map(account => {
      return <AccountCard key={account.name} name={account.name} />
    })
  }


  render() {
    const cards = this.renderCards();
    console.log(cards)

    return (
      <div id="idGridContainer">
        <div id="idSummaryPanel">
          <h2 className="subheading">Account Summary</h2>

          <CreateAccountForm onSubmit={this.addAccount}/> {/*probably just lift this up into this component*/}

          <div id="idReports" > {/*add logic for hidden className*/}
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