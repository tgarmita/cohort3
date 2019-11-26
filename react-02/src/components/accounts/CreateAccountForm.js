import React from 'react';
import './AccountsApp.css';

function CreateAccountForm(props) {
    return (
        <div className="form">
            <h3>Create New Account</h3>
            <form>
            <label>Account Name:
            <input id="idNewAccountName" type="text"/>
            </label>
            <label>Initial Balance:
            <span className="input-symbol-dollar"><input className="amount-input-dollar" id="idInitialBalance"
                type="number" min="0" step="0.01"/></span>
            </label>
            <button type='button' id="idAddAccount" onClick={props.onClick}>Add Account</button><br/><br/>
            <span id="idAccountMessage"></span>
            </form>
        </div>
    );
}

export default CreateAccountForm;