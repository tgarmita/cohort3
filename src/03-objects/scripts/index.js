import {Account} from './account.js'

const checkingAccount = new Account("Checking Account", 100); //will be created elsewhere

idGridContainer.addEventListener('click', (event) => {
    console.log(event)

    //Temp event to test basic UI - remove balance button eventually
    if (event.target.value === "Balance") {
        idBalance.textContent = checkingAccount.balance();
    }

    if (event.target.value === "Deposit") {
        checkingAccount.deposit(Number(idAmountInput.value));
    }

    if (event.target.value === "Withdraw") {
        checkingAccount.withdraw(Number(idAmountInput.value));
    }
});