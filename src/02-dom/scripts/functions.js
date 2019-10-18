
export const createListElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (idList.childElementCount + 1)));
    idList.appendChild(li);
};