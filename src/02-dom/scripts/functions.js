export const showChildren = (listElement) => {
    let childrenArray = [];
    let i = 0;
    let x;
    for (x of listElement.children) {
        childrenArray[i] = x.textContent;
        i++;
    }
    return childrenArray;
};

export const createListElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (idList.childElementCount + 1)));
    idList.appendChild(li);
};

export const appendCardElement = () => {
    let newCard = document.createElement("DIV");
    newCard.textContent = "Card " + idLeftPanel.childElementCount; //faster than createTextNode
    idLeftPanel.appendChild(newCard); //Where the placement occurs
    newCard.className = "card";

    addCardButtons(newCard);
};

export const addCardButtons = (newCard) => {
    newCard.appendChild(document.createElement("BR"));

    let addBeforeButton = document.createElement("BUTTON");
    addBeforeButton.textContent = "Add Before";
    newCard.appendChild(addBeforeButton);

    let addAfterButton = document.createElement("BUTTON");
    addAfterButton.textContent = "Add After";
    newCard.appendChild(addAfterButton);

    newCard.appendChild(document.createElement("BR"));

    let deleteButton = document.createElement("BUTTON");
    deleteButton.textContent = "Delete";
    newCard.appendChild(deleteButton);
};

export const addCardBefore = (currentCard) => {
    let newCard = document.createElement("DIV");
    newCard.textContent = "Card " + idLeftPanel.childElementCount; //faster than createTextNode
    idLeftPanel.insertBefore(newCard, currentCard); //Where the placement occurs
    newCard.className = "card";

    addCardButtons(newCard);
};

export const addCardAfter = (currentCard) => {
    let newCard = document.createElement("DIV");
    newCard.textContent = "Card " + idLeftPanel.childElementCount; //faster than createTextNode
    idLeftPanel.insertBefore(newCard, currentCard.nextSibling); //Where the placement occurs
    newCard.className = "card";

    addCardButtons(newCard);
};

export const deleteCard = (currentCard) => {
    currentCard.remove();
};


