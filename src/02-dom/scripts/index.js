import * as functions from './functions.js';

idContainer.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.id === "idShow") {
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

