import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

idEquals.addEventListener('click', (() => {
    switch (idOperator.value) {
        case "add":
            idAnswer.textContent = functions.add(idNum1.value,idNum2.value);
            break;
        case "subtract":
            idAnswer.textContent = functions.subtract(idNum1.value,idNum2.value);
            break;
        case "multiply":
            idAnswer.textContent = functions.multiply(idNum1.value,idNum2.value);
            break;
        case "divide":
            idAnswer.textContent = functions.divide(idNum1.value,idNum2.value);
            break;
    }

}));

idTaxCalc.addEventListener('click', (() => {
    idTax.textContent = "$" + functions.tax(idIncome.value);
}));