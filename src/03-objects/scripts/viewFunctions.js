import { AccountController } from './account.js'

const viewFunctions = {
    addToAccountList: (accountName, accountBalance) => {
        let newAccount = document.createElement("LI");
        newAccount.textContent = `${accountName}: $${accountBalance}`;
        newAccount.id = "idListItem-" + accountName;
        idAccountList.appendChild(newAccount);
    },

    removeFromAccountList: (accountName) => {
        document.getElementById("idListItem-" + accountName).remove();
    },

    createAccountCard: (accountName) => {
        let newCard = document.createElement("DIV");
        newCard.id = accountName;
        newCard.className = "card";

        let accountHeader = document.createElement("H3");
        accountHeader.textContent = accountName;
        newCard.appendChild(accountHeader);

        viewFunctions.addCardButtons(newCard);

        idCardPanel.appendChild(newCard);
    },

    addCardButtons: (newCard) => {
   
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
        amountInput.className = "amount-input-dollar";
        dollarSymbol.appendChild(amountInput);

        let balanceLabel = document.createElement("SPAN");
        balanceLabel.textContent = " Balance: $";
        amountLabel.appendChild(balanceLabel);

        let balanceAmount = document.createElement("SPAN");
        balanceAmount.textContent = 0;
        amountLabel.appendChild(balanceAmount);

        newCard.appendChild(document.createElement("BR"));

        let balanceButton = document.createElement("BUTTON");
        balanceButton.textContent = "Show Balance";
        newCard.appendChild(balanceButton);

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

};

export default viewFunctions;