import * as functions from './functions.js';

idContainer.addEventListener('click', (event) => {
    if (event.target.id === "idShow") {
        console.log(event);
        let childrenArray = [];
        let i = 0;
        let x;
        for (x of idList.children) {
            childrenArray[i] = x.textContent;
            i++;
        }
        alert(childrenArray);
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

