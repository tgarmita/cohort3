
const viewFunctions = {

    refreshMap: (cityList) => {
        //Clear Map
        while (idSVG.hasChildNodes()) {
            idSVG.removeChild(idSVG.firstChild);
        }
        //Repopulate Map
        cityList.forEach((city) => {
            viewFunctions.mapPoints(city);
        })
    },

    mapPoints: (city) => {
        //Inspired by http://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
        let point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let label = document.createElementNS('http://www.w3.org/2000/svg', 'text')

        point.setAttribute('cx', Math.abs(city.long + 113) * 100); //replace these with normalizing function
        point.setAttribute('cy', Math.abs(city.lat - 50) * 100);
        point.setAttribute("r", "10");
        point.setAttribute("stroke", "black");
        point.setAttribute("stroke-width", "1");
        point.setAttribute("fill", "orange");

        label.setAttribute('x', Math.abs(city.long + 113) * 100 + 10);
        label.setAttribute('y', Math.abs(city.lat - 50) * 100 - 10);
        //label.textContent = city.name; //Nope

        let txt = document.createTextNode(city.name);
        label.appendChild(txt);

        idSVG.appendChild(point);
        idSVG.appendChild(label);
    }
};

export default viewFunctions;