import React, { Component } from 'react';
import CreateAccountForm from './CreateAccountForm';

class AccountsApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="idSummaryPanel">
          <h2 class="subheading">Account Summary</h2>

          <CreateAccountForm />

        </div>
      </div>
    );
  }
}

export default AccountsApp;