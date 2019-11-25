import React from 'react';

function CreateAccountForm(props) {
    return (
        <div className="form">
            <h3>Create New Account</h3>
            {/* <label>Account Name:
            <input id="idNewAccountName" type="text">
            </label>
             <label>Initial Balance:
            <span class="input-symbol-dollar"><input class="amount-input-dollar" id="idInitialBalance"
                    type="number" min="0" step="0.01"></span>
            </label> */}
            <button type='button' id="idAddAccount">Add Account</button>
            <span id="idAccountMessage"></span>
        </div>
    );
}

export default CreateAccountForm;