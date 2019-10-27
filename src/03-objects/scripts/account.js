
export class Account {
    constructor(name, startingBalance) {
        this.name = name;
        this.currentBalance = startingBalance;
    }

    deposit(depVal) {
        this.currentBalance += depVal;
    }

    withdraw(withDrawVal) {
        this.currentBalance -= withDrawVal;
    }

   balance() {
        return this.currentBalance;
    }

}

