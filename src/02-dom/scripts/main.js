import * as functions from './functions.js';

idContainer.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.id === "idShow") {
        alert(functions.showChildren(idList));
    }

    if (event.target.id === "idAdd") {
        functions.createListElement();
    }
});


idLeftPanel.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.id === "idAddCard") {
        functions.appendCardElement();
    }

    if (event.target.textContent === "Add Before") {
        functions.addCardBefore(event.target.parentNode);
    }

    if (event.target.textContent === "Add After") {
        functions.addCardAfter(event.target.parentNode);
    }

    if (event.target.textContent === "Delete") {
        functions.deleteCard(event.target.parentNode);
    }
});

