import functions from './functions.js';

// **********
//
// Add the event listeners
// 

/*Size*/
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


/*Calculator*/
idEquals.addEventListener('click', (() => {
    switch (idOperator.value) {
        case "add":
            idAnswer.textContent = functions.add(idNum1.value, idNum2.value);
            break;
        case "subtract":
            idAnswer.textContent = functions.subtract(idNum1.value, idNum2.value);
            break;
        case "multiply":
            idAnswer.textContent = functions.multiply(idNum1.value, idNum2.value);
            break;
        case "divide":
            idAnswer.textContent = functions.divide(idNum1.value, idNum2.value);
            break;
    }

}));


/*Taxes*/
idTaxCalc.addEventListener('click', (() => {
    idTax.textContent = "$" + functions.tax(idIncome.value);
}));


/*Working with Arrays*/
let currentArray = [];

idAdd.addEventListener('click', (() => {
    if (isNaN(idElementInput.value) || idElementInput.value ==="") {
        idMessageArea.textContent = "Please enter a valid number";
    } else {
        functions.addElement(currentArray, idElementInput.value);
        idMessageArea.textContent = idElementInput.value + " Has been added to the array";
    }
}));

idShow.addEventListener('click', (() => {
    idMessageArea.textContent = "Array state: " + currentArray.toString();
}));

idTotal.addEventListener('click', (() => {
    idMessageArea.textContent = "Total: " + functions.totalArr(currentArray);
}));

idClear.addEventListener('click', (() => {
    functions.clearArr(currentArray);
    idMessageArea.textContent = "Array Cleared"
}));