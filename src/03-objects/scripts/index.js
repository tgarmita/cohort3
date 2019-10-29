import { AccountController } from './account.js'
import viewFunctions from './viewFunctions.js'

const accountController = new AccountController();



idGridContainer.addEventListener('click', (event) => {
    console.log(event)

    /*Account Summary*/

    if (event.target.id === "idAddAccount") {
        let accountName = idNewAccountName.value + " Account";
        let accountBalance = idInitialBalance.value;
        accountController.createAccount(accountName, accountBalance);
        viewFunctions.addToAccountList(accountName, accountBalance);
        viewFunctions.createAccountCard(accountName);
        if (accountController.getAccountList().length > 0) {
            idReports.classList.remove("hidden");
        }
    }


    // if (event.target.className === "delete-button") {
    
    // }

    if (event.target.id === "idTotalAccounts") {
        if (accountController.getAccountList().length === 0) {
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

