
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


// constructor - 2 parms - account name, initial balance
// deposit - 1 parm - value to be added
// withdraw -1 parm - value to be withdrawn 
// balance - no parms - returns current balance 
