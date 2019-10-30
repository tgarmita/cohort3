
const viewFunctions = {

    refreshAccountList: (accounts) => {
        //Clear list
        while (idAccountList.hasChildNodes()) {
            idAccountList.removeChild(idAccountList.firstChild);
        }
        //Repopulate list
        accounts.forEach((account) => {
            let newAccount = document.createElement("LI");
            newAccount.textContent = `${account.name}: $${account.currentBalance}`;
            idAccountList.appendChild(newAccount);
        })
    },

    createAccountCard: (accountName, accountBalance) => {
        let newCard = document.createElement("DIV");
        newCard.id = accountName;
        newCard.className = "card";

        let accountHeader = document.createElement("H3");
        accountHeader.textContent = accountName;
        newCard.appendChild(accountHeader);

        viewFunctions.addCardButtons(newCard, accountBalance, accountName);

        idCardPanel.appendChild(newCard);
    },

    addCardButtons: (newCard, accountBalance, accountName) => {
        newCard.appendChild(document.createElement("BR"));

        let amountLabel = document.createElement("LABEL");
        amountLabel.textContent = "Amount: ";
        newCard.appendChild(amountLabel);

        let dollarSymbol = document.createElement("SPAN");
        dollarSymbol.className = "input-symbol-dollar";
        amountLabel.appendChild(dollarSymbol);

        let amountInput = document.createElement("INPUT");
        amountInput.type = "number";
        amountInput.min = 0;
        amountInput.step = 0.01;
        amountInput.className = "amount-input-dollar";
        amountInput.id = "idAmountInput-" + accountName;
        dollarSymbol.appendChild(amountInput);

        let balanceLabel = document.createElement("SPAN");
        balanceLabel.textContent = " Balance: $";
        amountLabel.appendChild(balanceLabel);

        let balanceAmount = document.createElement("SPAN");
        balanceAmount.textContent = accountBalance;
        balanceAmount.id = "idBalanceAmount-" + accountName;
        amountLabel.appendChild(balanceAmount);

        newCard.appendChild(document.createElement("BR"));

        let depositButton = document.createElement("BUTTON");
        depositButton.textContent = "Deposit";
        newCard.appendChild(depositButton);

        let withdrawButton = document.createElement("BUTTON");
        withdrawButton.textContent = "Withdraw";
        newCard.appendChild(withdrawButton);

        let deleteButton = document.createElement("BUTTON");
        deleteButton.textContent = "×";
        deleteButton.className = "delete-button";
        newCard.appendChild(deleteButton);
    },

    deleteCard: (card) => {
        card.remove();
    }

};

export default viewFunctions;