import { AccountController } from './account.js'
import viewFunctions from './viewFunctions.js'

const accountController = new AccountController();

idGridContainer.addEventListener('click', (event) => {
    // console.log(event)

    /*Account Summary*/

    if (event.target.id === "idAddAccount") {
        if (idNewAccountName.value === "") {
            idAccountMessage.textContent = "Please enter an account name.";
        } else {

            let accountName = idNewAccountName.value + " Account";
            let accountBalance = Math.round(Number(idInitialBalance.value)*100) / 100; //round inspired by Lawrence
            idNewAccountName.value = "";
            idInitialBalance.value = "";

            if (accountController.getAccount(accountName) !== undefined) {
                idAccountMessage.textContent = `${accountName} already exists. Please choose another name.`;
            }
            else {
                accountController.createAccount(accountName, accountBalance);
                viewFunctions.refreshAccountList(accountController.getAccounts());
                viewFunctions.createAccountCard(accountName, accountBalance);
                idAccountMessage.textContent = ""
                if (accountController.getAccounts().length > 0) {
                    idReports.classList.remove("hidden");
                }
            }
        }
    }

    if (event.target.id === "idTotalAccounts") {
        idReportMessage.textContent = `Total balance of all accounts: $${accountController.totalAccounts()}`;
    }

    if (event.target.id === "idMostValuable") {
        let mVName = accountController.mostValuableAccount().name;
        let mVBalance = accountController.mostValuableAccount().currentBalance;

        idReportMessage.textContent = `Your most valuable account is the ${mVName} at $${mVBalance}`;
    }

    if (event.target.id === "idLeastValuable") {
        let lVName = accountController.leastValuableAccount().name;
        let lVBalance = accountController.leastValuableAccount().currentBalance;

        idReportMessage.textContent = `Your least valuable account is the ${lVName} at $${lVBalance}`;
    }

    /*Account Cards*/

    if (event.target.textContent === "Deposit") {
        let accountCard = event.target.parentNode;
        let accountInput = document.getElementById("idAmountInput-" + accountCard.id);
        let balanceDisplay = document.getElementById("idBalanceAmount-" + accountCard.id);

        accountController.getAccount(accountCard.id).deposit(Math.round(Number(accountInput.value)*100) / 100);
        balanceDisplay.textContent = accountController.getAccount(accountCard.id).currentBalance;
        viewFunctions.refreshAccountList(accountController.getAccounts());
        accountInput.value = "";
    }

    if (event.target.textContent === "Withdraw") {
        let accountCard = event.target.parentNode;
        let accountInput = document.getElementById("idAmountInput-" + accountCard.id);
        let balanceDisplay = document.getElementById("idBalanceAmount-" + accountCard.id);

        accountController.getAccount(accountCard.id).withdraw(Math.round(Number(accountInput.value)*100) / 100);
        balanceDisplay.textContent = accountController.getAccount(accountCard.id).currentBalance;
        viewFunctions.refreshAccountList(accountController.getAccounts());
        accountInput.value = "";
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
});

