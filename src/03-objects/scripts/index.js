import { AccountController } from './account.js'
import viewFunctions from './viewFunctions.js'

const accountController = new AccountController();



idGridContainer.addEventListener('click', (event) => {
    console.log(event)

    /*Account Summary*/

    if (event.target.id === "idAddAccount") {
        let accountName = idNewAccountName.value + " Account";
        let accountBalance = idInitialBalance.value;

        if (accountController.getAccount(accountName) !== undefined) {
            idReportMessage.textContent = `${accountName} already exists. Please choose another name.`;
        } else {
            accountController.createAccount(accountName, accountBalance);
            viewFunctions.refreshAccountList(accountController.getAccounts());
            viewFunctions.createAccountCard(accountName, accountBalance);
            if (accountController.getAccounts().length > 0) {
                idReports.classList.remove("hidden");
            }
        }
    }


    if (event.target.className === "delete-button") {
        let card = event.target.parentElement;
        accountController.removeAccount(card.id);
        viewFunctions.refreshAccountList(accountController.getAccounts());
        viewFunctions.deleteCard(card);
        if (accountController.getAccounts().length < 1) {
            idReports.classList.add("hidden");
        }
    }

    if (event.target.id === "idTotalAccounts") {
        if (accountController.getAccounts().length === 0) {
            idReportMessage.textContent = "No Accounts";
        } else {
            idReportMessage.textContent = `Total balance of all accounts: $${accountController.totalAccounts()}`;
        }
    }



    /*Account Cards*/

    //Temp event to test basic UI - remove balance button eventually
    //Use Account Controller to access account

    // if (event.target.value === "Balance") {
    //     idBalance.textContent = checkingAccount.balance();
    // }

    // if (event.target.value === "Deposit") {
    //     checkingAccount.deposit(Number(idAmountInput.value));
    // }

    // if (event.target.value === "Withdraw") {
    //     checkingAccount.withdraw(Number(idAmountInput.value));
    // }
});

