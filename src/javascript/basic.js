console.log("Hello World from basic.js");

const button = document.getElementById("pbutton");
const input = document.getElementById("uinput");



function insertElement(sizeText) {
    // Use below to create new elements
    // let para = document.createElement("p");
    // let node = document.createTextNode(sizeText);
   
    // para.appendChild(node);
    // var element = document.getElementById("div1");
    // element.appendChild(para);

    const sizeOutput = document.getElementById("sizeoutput");
    sizeOutput.textContent = sizeText;
}

function size(integer) {
    if (integer < 10) {
        return "small";
    } else if (integer >= 10 && integer <=19) {
        return "med";
    } else return "large";

};

function onButtonClicked() {
    console.log("I'm in the button click event");
    console.log(Number(input.value) + 1);
    if (!isNaN(input.value) && input.value.length > 0){
        insertElement(size(input.value));
    };

}

function onMouseOver() {
    const locations = ["Canada", "Alberta", "Calgary", "EvolveU"]
    const heading = document.getElementById("heading");
    heading.innerHTML = locations[Math.floor(Math.random() *4)];
}

button.addEventListener("click", onButtonClicked);
heading.addEventListener("mouseover", onMouseOver);